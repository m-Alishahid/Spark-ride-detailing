"use client";

import React, { useState, useEffect } from "react";
import { serviceTypes, timeSlots, mainServices } from "@/Data/booking-service";
import { allCities } from "@/Data/stateMapping";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon, Plus, Trash2, Car, Package, User, Check, ChevronRight, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";

// Define TypeScript interfaces
interface ServicePackage {
  id: string;
  name: string;
  price: number | string;
  description: string;
  pricingType?: string;
  includes: string[];
}

interface AdditionalService {
  id: string;
  name: string;
  price: number | string;
  description: string;
}

interface ServiceVariant {
  id: string;
  name: string;
  vehicleTypes: string[];
  packages: ServicePackage[];
  additionalServices: AdditionalService[];
}

interface ServiceType {
  id: string;
  name: string;
  vehicleTypes: string[];
  packages?: ServicePackage[];
  variants?: ServiceVariant[];
  additionalServices?: AdditionalService[];
}

interface MainService {
  id: string;
  name: string;
  description: string;
  packages: ServicePackage[];
}

// Individual Vehicle Booking Interface
interface VehicleBooking {
  id: string;
  serviceType: string;
  variant?: string;
  mainService: string;
  package: string;
  additionalServices: string[];
  vehicleType: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  vehicleColor: string;
  vehicleLength?: string;
}

interface FormData {
  vehicleBookings: VehicleBooking[];
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  date: string;
  timeSlot: string;
  notes: string;
}

// Generate unique booking ID
const generateBookingId = (): string => {
  const randomNum = Math.floor(10000 + Math.random() * 90000);
  return `DAD-${randomNum}`;
};

// Phone number formatting utility
const formatPhoneNumber = (value: string): string => {
  const cleaned = value.replace(/\D/g, '');

  let formatted = cleaned;
  if (!formatted.startsWith('1') && formatted.length > 0) {
    formatted = '1' + formatted;
  }

  if (formatted.length > 1) {
    const countryCode = formatted.substring(0, 1);
    const areaCode = formatted.substring(1, 4);
    const firstPart = formatted.substring(4, 7);
    const secondPart = formatted.substring(7, 11);

    let result = `+${countryCode}`;
    if (areaCode) result += ` (${areaCode}`;
    if (firstPart) result += `) ${firstPart}`;
    if (secondPart) result += `-${secondPart}`;

    return result;
  }

  return formatted ? `+${formatted}` : '+1';
};

const BookingForm = () => {
  const [formData, setFormData] = useState<FormData>({
    vehicleBookings: [
      {
        id: 'vehicle-1',
        serviceType: "",
        variant: "",
        mainService: "",
        package: "",
        additionalServices: [],
        vehicleType: "",
        vehicleMake: "",
        vehicleModel: "",
        vehicleYear: "",
        vehicleColor: "",
        vehicleLength: "",
      }
    ],
    firstName: "",
    lastName: "",
    email: "",
    phone: "+1 ",
    address: "",
    city: "",
    state: "",
    zip: "",
    date: "",
    timeSlot: "",
    notes: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<{ code: string; discount: number } | null>(null);
  const [promoError, setPromoError] = useState("");
  const [isManualState, setIsManualState] = useState(false);
  const [direction, setDirection] = useState(0);

  // Website name
  const WEBSITE_NAME = "Decent Auto Detailing";

  // Animation variants
  const fadeIn = { 
    hidden: { opacity: 0, y: 10 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } 
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  // Helper function to filter packages based on vehicle type
  const filterPackagesByVehicleType = (packages: ServicePackage[], vehicleType: string) => {
    return packages.filter(pkg => {
      const packageId = pkg.id.toLowerCase();
      const vehicleTypeLower = vehicleType.toLowerCase();

      const vehicleKeywords = ['sedan', 'suv', 'truck', 'van', 'boat', 'jet-ski', 'rv', 'motorcycle'];

      for (const keyword of vehicleKeywords) {
        if (packageId.includes(keyword)) {
          return packageId.includes(vehicleTypeLower);
        }
      }

      return true;
    });
  };

  // Auto-detect state from city
  const autoDetectState = (city: string): string => {
    if (!city) return "";
    const normalizedCity = city.toLowerCase().trim();
    return allCities[normalizedCity] || "";
  };

  // Auto-apply promo code from sessionStorage
  useEffect(() => {
    const autoApplyPromo = sessionStorage.getItem("auto_apply_promo");
    const autoApplyDiscount = sessionStorage.getItem("auto_apply_promo_discount");
    if (autoApplyPromo && autoApplyDiscount && !appliedPromo) {
      setAppliedPromo({ code: autoApplyPromo, discount: parseInt(autoApplyDiscount) });
      setPromoCode(autoApplyPromo);
      sessionStorage.removeItem("auto_apply_promo");
      sessionStorage.removeItem("auto_apply_promo_discount");
    }
  }, [appliedPromo]); // Fixed: added appliedPromo dependency

  // Handle phone number input with formatting
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    if (!value.startsWith('+1')) {
      if (value.startsWith('1')) {
        value = '+' + value;
      } else {
        value = '+1 ' + value.replace(/^\+?1?\s?/, '');
      }
    }

    const formatted = formatPhoneNumber(value);
    setFormData(prev => ({ ...prev, phone: formatted }));
  };

  // Calculate total price for all vehicles
  const calculateTotalPrice = () => {
    let total = 0;

    formData.vehicleBookings.forEach(vehicle => {
      const serviceType = serviceTypes.find(st => st.id === vehicle.serviceType);
      const mainService = mainServices.find(ms => ms.id === vehicle.mainService);

      let pkg;

      if (mainService) {
        pkg = mainService.packages.find(p => p.id === vehicle.package);
      } else if (serviceType?.variants && vehicle.variant) {
        const variant = serviceType.variants.find(v => v.id === vehicle.variant);
        pkg = variant?.packages.find(p => p.id === vehicle.package);
      } else {
        pkg = serviceType?.packages?.find(p => p.id === vehicle.package);
      }

      if (pkg) {
        let packagePrice = typeof pkg.price === 'string' ? Number(pkg.price) || 0 : pkg.price;
        const pricingType = pkg.pricingType || "fixed";

        if (pricingType === "perFoot" && vehicle.vehicleLength) {
          packagePrice *= parseFloat(vehicle.vehicleLength);
        }
        total += packagePrice;
      }

      if (vehicle.additionalServices.length > 0) {
        let additionalServicesList: AdditionalService[] = [];

        if (serviceType?.variants && vehicle.variant) {
          const variant = serviceType.variants.find(v => v.id === vehicle.variant);
          additionalServicesList = variant?.additionalServices || [];
        } else if (serviceType?.additionalServices) {
          additionalServicesList = serviceType.additionalServices || [];
        }

        vehicle.additionalServices.forEach(addId => {
          const addService = additionalServicesList.find(a => a.id === addId);
          if (addService) {
            const price = typeof addService.price === 'string' ? Number(addService.price) || 0 : addService.price;
            total += price;
          }
        });
      }
    });

    return total;
  };

  // Remove whitespace from promo code and apply
  const applyPromoCode = async () => {
    const cleanedPromoCode = promoCode.replace(/\s/g, '');

    if (!cleanedPromoCode.trim()) {
      setPromoError("Please enter a promo code");
      return;
    }

    try {
      const validateResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/promo-codes/validate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ promoCode: cleanedPromoCode.trim().toUpperCase() })
      });

      const validateData = await validateResponse.json();

      if (!validateData.success || !validateData.valid) {
        setPromoError(validateData.message || 'Invalid promo code');
        setAppliedPromo(null);
        return;
      }

      const totalAmount = calculateTotalPrice();
      const applyResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/promo-codes/apply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          promoCode: cleanedPromoCode.trim().toUpperCase(),
          amount: totalAmount
        })
      });

      const applyData = await applyResponse.json();

      if (applyData.success) {
        setAppliedPromo({
          code: applyData.data.promoCode,
          discount: applyData.data.discountPercentage
        });
        setPromoError("");
        setPromoCode(cleanedPromoCode);
      } else {
        setPromoError(applyData.message || 'Error applying promo code');
        setAppliedPromo(null);
      }
    } catch (error) {
      console.error('Error validating/applying promo code:', error);
      setPromoError('Network error - please try again');
      setAppliedPromo(null);
    }
  };

  // Update promo code input with whitespace removal
  const handlePromoCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s/g, '');
    setPromoCode(value);
  };

  // Add new vehicle booking
  const addVehicleBooking = () => {
    const newVehicle: VehicleBooking = {
      id: `vehicle-${Date.now()}`,
      serviceType: "",
      variant: "",
      mainService: "",
      package: "",
      additionalServices: [],
      vehicleType: "",
      vehicleMake: "",
      vehicleModel: "",
      vehicleYear: "",
      vehicleColor: "",
      vehicleLength: "",
    };
    setFormData(prev => ({
      ...prev,
      vehicleBookings: [...prev.vehicleBookings, newVehicle]
    }));
  };

  // Remove vehicle booking
  const removeVehicleBooking = (vehicleId: string) => {
    if (formData.vehicleBookings.length <= 1) {
      toast.error("At least one vehicle is required");
      return;
    }
    setFormData(prev => ({
      ...prev,
      vehicleBookings: prev.vehicleBookings.filter(v => v.id !== vehicleId)
    }));
  };

  // Update specific vehicle booking
  const updateVehicleBooking = (vehicleId: string, field: keyof VehicleBooking, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      vehicleBookings: prev.vehicleBookings.map(vehicle => 
        vehicle.id === vehicleId 
          ? { ...vehicle, [field]: value }
          : vehicle
      )
    }));
  };

  // Reset dependent fields when service type changes
  const handleServiceTypeChange = (vehicleId: string, serviceTypeId: string) => {
    updateVehicleBooking(vehicleId, 'serviceType', serviceTypeId);
    updateVehicleBooking(vehicleId, 'variant', "");
    updateVehicleBooking(vehicleId, 'mainService', "");
    updateVehicleBooking(vehicleId, 'package', "");
    updateVehicleBooking(vehicleId, 'additionalServices', []);
    
    const serviceType = serviceTypes.find(st => st.id === serviceTypeId);
    if (serviceType) {
      updateVehicleBooking(vehicleId, 'vehicleType', serviceType.name);
    } else {
      updateVehicleBooking(vehicleId, 'vehicleType', "");
    }
    
    updateVehicleBooking(vehicleId, 'vehicleMake', "");
    updateVehicleBooking(vehicleId, 'vehicleModel', "");
    updateVehicleBooking(vehicleId, 'vehicleYear', "");
    updateVehicleBooking(vehicleId, 'vehicleColor', "");
    updateVehicleBooking(vehicleId, 'vehicleLength', "");
  };

  // Reset dependent fields when variant changes
  const handleVariantChange = (vehicleId: string, variantId: string) => {
    updateVehicleBooking(vehicleId, 'variant', variantId);
    updateVehicleBooking(vehicleId, 'mainService', "");
    updateVehicleBooking(vehicleId, 'package', "");
    updateVehicleBooking(vehicleId, 'additionalServices', []);
    
    const vehicle = formData.vehicleBookings.find(v => v.id === vehicleId);
    if (vehicle) {
      const serviceType = serviceTypes.find(st => st.id === vehicle.serviceType);
      if (serviceType?.variants) {
        const variant = serviceType.variants.find(v => v.id === variantId);
        if (variant) {
          updateVehicleBooking(vehicleId, 'vehicleType', variant.name);
        }
      }
    }
  };

  // Reset dependent fields when main service changes
  const handleMainServiceChange = (vehicleId: string, mainServiceId: string) => {
    updateVehicleBooking(vehicleId, 'mainService', mainServiceId);
    updateVehicleBooking(vehicleId, 'package', "");
    updateVehicleBooking(vehicleId, 'additionalServices', []);
  };

  // Calculate discount amount
  const calculateDiscount = () => {
    if (!appliedPromo) return 0;
    const totalPrice = calculateTotalPrice();
    return (totalPrice * appliedPromo.discount) / 100;
  };

  // Calculate final price after discount
  const calculateFinalPrice = () => {
    const totalPrice = calculateTotalPrice();
    const discount = calculateDiscount();
    return totalPrice - discount;
  };

  // Remove applied promo
  const removePromoCode = () => {
    setAppliedPromo(null);
    setPromoCode("");
    setPromoError("");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      handlePhoneChange(e as React.ChangeEvent<HTMLInputElement>);
    } else if (name === 'state') {
      setIsManualState(true);
      setFormData(prev => ({ ...prev, [name]: value }));
    } else if (name === 'city') {
      setFormData(prev => ({ ...prev, [name]: value }));
      if (!value.trim() && !isManualState) {
        setFormData(prev => ({ ...prev, state: "" }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleDateSelect = (date: Date | undefined) => {
    setFormData(prev => ({
      ...prev,
      date: date ? date.toISOString() : "",
    }));
  };

  const nextStep = () => {
    setDirection(1);
    setCurrentStep((prev) => prev + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setDirection(-1);
    setCurrentStep((prev) => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newBookingId = generateBookingId();

    try {
      const totalPrice = calculateTotalPrice();
      const discountedPrice = calculateFinalPrice();

      const bookingData = {
        bookingId: newBookingId,
        webName: WEBSITE_NAME,
        formData: formData,
        totalPrice: totalPrice,
        discountedPrice: discountedPrice,
        discountApplied: !!appliedPromo,
        discountPercent: appliedPromo?.discount || 0,
        promoCode: appliedPromo?.code || null,
        submittedAt: new Date().toISOString(),
        vehicleCount: formData.vehicleBookings.length,
        status: "pending"
      };

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/booking`, { 
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Booking Confirmed Successfully');
        setShowConfirmation(true);
      } else {
        toast.error(data.error || 'Booking Confirmation Error');
      }

    } catch (error) { // Fixed: changed 'err' to 'error'
      console.error('Booking error:', error);
      toast.error('Network error - please try again');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
    setFormData({
      vehicleBookings: [
        {
          id: 'vehicle-1',
          serviceType: "",
          variant: "",
          mainService: "",
          package: "",
          additionalServices: [],
          vehicleType: "",
          vehicleMake: "",
          vehicleModel: "",
          vehicleYear: "",
          vehicleColor: "",
          vehicleLength: "",
        }
      ],
      firstName: "",
      lastName: "",
      email: "",
      phone: "+1 ",
      address: "",
      city: "",
      state: "",
      zip: "",
      date: "",
      timeSlot: "",
      notes: "",
    });
    setCurrentStep(1);
    setPromoCode("");
    setAppliedPromo(null);
    setPromoError("");
    setIsManualState(false);
  };

  // Auto-detect state when city changes
  useEffect(() => {
    if (formData.city.trim() && !isManualState) {
      const detectedState = autoDetectState(formData.city);
      if (detectedState && detectedState !== formData.state) {
        setFormData(prev => ({ ...prev, state: detectedState }));
      }
    }
  }, [formData.city, formData.state, isManualState]);

  // Check if all vehicles have valid configurations
  const areAllVehiclesValid = formData.vehicleBookings.every(vehicle => {
    const serviceType = serviceTypes.find(st => st.id === vehicle.serviceType);
    const mainService = mainServices.find(ms => ms.id === vehicle.mainService);
    
    let pkg;
    if (mainService) {
      pkg = mainService.packages.find(p => p.id === vehicle.package);
    } else if (serviceType?.variants && vehicle.variant) {
      const variant = serviceType.variants.find(v => v.id === vehicle.variant);
      pkg = variant?.packages.find(p => p.id === vehicle.package);
    } else {
      pkg = serviceType?.packages?.find(p => p.id === vehicle.package);
    }

    const requiresLength = pkg?.pricingType === "perFoot";

    return vehicle.serviceType && 
           vehicle.mainService && 
           vehicle.package &&
           vehicle.vehicleMake &&
           vehicle.vehicleModel &&
           vehicle.vehicleYear &&
           vehicle.vehicleColor &&
           (!requiresLength || vehicle.vehicleLength);
  });

  // Step icons and titles
  const stepConfig = [
    { step: 1, label: "Vehicle Information", icon: <Car size={18} />, description: "Tell us about your vehicle" },
    { step: 2, label: "Service Selection", icon: <Package size={18} />, description: "Choose your services" },
    { step: 3, label: "Your Details", icon: <User size={18} />, description: "Finalize booking" },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-['Poppins']">
        {/* Header Section - Spark Ride Style */}
        <div className="bg-gradient-to-br from-[#10B5DB]/10 via-white to-gray-100 pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Book Your <span className="text-[#10B5DB]">Premium</span> Service
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience the {WEBSITE_NAME} difference with our professional detailing services. 
                Get your vehicle looking showroom-ready.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
            
            {/* Progress Bar - Desktop - Spark Ride Style */}
            <div className="hidden lg:flex lg:w-1/4">
              <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Steps</h3>
                <div className="space-y-6">
                  {stepConfig.map(({ step: stepNum, label, icon, description }) => {
                    const isActive = currentStep === stepNum;
                    const isCompleted = currentStep > stepNum;

                    return (
                      <div key={stepNum} className="flex items-start space-x-3">
                        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                          isActive 
                            ? "bg-[#10B5DB] border-[#10B5DB] text-white" 
                            : isCompleted 
                              ? "bg-green-500 border-green-500 text-white"
                              : "bg-gray-100 border-gray-300 text-gray-500"
                        }`}>
                          {isCompleted ? <Check size={16} /> : icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`font-medium text-sm ${
                            isActive ? "text-[#10B5DB]" : isCompleted ? "text-gray-900" : "text-gray-500"
                          }`}>
                            {label}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Main Form Content */}
            <div className="lg:w-3/4">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 md:p-8">
                <form onSubmit={handleSubmit}>
                  <AnimatePresence initial={false} custom={direction} mode="wait">
                    
                    {/* STEP 1 - Vehicle Information - Spark Ride Style */}
                    {currentStep === 1 && (
                      <motion.div
                        key="step1"
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="space-y-6"
                      >
                        <div className="text-center mb-8">
                          <div className="w-12 h-12 bg-[#10B5DB]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Car className="h-6 w-6 text-[#10B5DB]" />
                          </div>
                          <h2 className="text-2xl font-bold text-gray-900">Vehicle Information</h2>
                          <p className="text-gray-600 mt-2">Tell us about the vehicle(s) you want serviced</p>
                        </div>

                        {/* Add Vehicle Button - Top */}
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-semibold text-gray-900">
                            Vehicle Services ({formData.vehicleBookings.length})
                          </h3>
                          <Button
                            type="button"
                            onClick={addVehicleBooking}
                            className="bg-[#10B5DB] hover:bg-[#10B5DB]/90 text-white"
                          >
                            <Plus className="w-4 h-4 mr-2" />
                            Add Another Vehicle
                          </Button>
                        </div>

                        {/* Vehicle Booking Sections */}
                        {formData.vehicleBookings.map((vehicle, index) => {
                          const serviceType = serviceTypes.find(st => st.id === vehicle.serviceType);
                          const mainService = mainServices.find(ms => ms.id === vehicle.mainService);
                          let selectedPackage;

                          if (mainService) {
                            selectedPackage = mainService.packages.find(p => p.id === vehicle.package);
                          } else if (serviceType?.variants && vehicle.variant) {
                            const variant = serviceType.variants.find(v => v.id === vehicle.variant);
                            selectedPackage = variant?.packages.find(p => p.id === vehicle.package);
                          } else {
                            selectedPackage = serviceType?.packages?.find(p => p.id === vehicle.package);
                          }

                          const requiresLength = selectedPackage?.pricingType === "perFoot";

                          return (
                            <motion.div
                              key={vehicle.id}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              className="border border-gray-200 rounded-xl bg-white p-6 shadow-sm relative"
                            >
                              {/* Remove Vehicle Button */}
                              {formData.vehicleBookings.length > 1 && (
                                <Button
                                  type="button"
                                  onClick={() => removeVehicleBooking(vehicle.id)}
                                  variant="outline"
                                  size="sm"
                                  className="absolute top-4 right-4 text-red-600 border-red-200 hover:bg-red-50"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              )}

                              <div className="flex justify-between items-center mb-4">
                                <div>
                                  <h4 className="text-lg font-semibold text-gray-900">Vehicle {index + 1}</h4>
                                  {vehicle.vehicleType && (
                                    <p className="text-sm text-gray-600 capitalize">
                                      {vehicle.vehicleType} Details
                                    </p>
                                  )}
                                </div>
                              </div>

                              <div className="space-y-4">
                                {/* Service Type Selection */}
                                <div className="space-y-2">
                                  <Label className="text-gray-900 font-medium">Vehicle Type *</Label>
                                  <Select 
                                    value={vehicle.serviceType} 
                                    onValueChange={(value) => handleServiceTypeChange(vehicle.id, value)}
                                  >
                                    <SelectTrigger className="h-12 bg-white border-gray-300 text-gray-900">
                                      <SelectValue placeholder="Select your vehicle type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {serviceTypes.map((service) => (
                                        <SelectItem key={service.id} value={service.id}>
                                          {service.name}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </div>

                                {/* Variant Selection for Car Detailing */}
                                {serviceType?.variants && (
                                  <div className="space-y-2">
                                    <Label className="text-gray-900 font-medium">Car Type</Label>
                                    <Select 
                                      value={vehicle.variant} 
                                      onValueChange={(value) => handleVariantChange(vehicle.id, value)}
                                    >
                                      <SelectTrigger className="h-12 bg-white border-gray-300 text-gray-900">
                                        <SelectValue placeholder="Select vehicle type" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        {serviceType.variants.map((variant) => (
                                          <SelectItem key={variant.id} value={variant.id}>
                                            {variant.name}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                  </div>
                                )}

                                {/* Main Service Selection */}
                                {(vehicle.variant || (serviceType && !serviceType.variants)) && !vehicle.mainService && (
                                  <div className="space-y-2">
                                    <Label className="text-gray-900 font-medium">Premium Service Type</Label>
                                    <Select 
                                      value={vehicle.mainService} 
                                      onValueChange={(value) => handleMainServiceChange(vehicle.id, value)}
                                    >
                                      <SelectTrigger className="h-12 bg-white border-gray-300 text-gray-900">
                                        <SelectValue placeholder="Select a premium service" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        {mainServices.map((service) => (
                                          <SelectItem key={service.id} value={service.id}>
                                            {service.name}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                  </div>
                                )}

                                {/* Main Service Packages */}
                                {vehicle.mainService && (
                                  <div className="space-y-4">
                                    <Label className="block text-gray-900 font-medium">
                                      Select {mainService?.name} Package
                                    </Label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      {filterPackagesByVehicleType(mainService?.packages || [], vehicle.vehicleType).map((pkg) => {
                                        const isSelected = vehicle.package === pkg.id;
                                        return (
                                          <div
                                            key={pkg.id}
                                            onClick={() => updateVehicleBooking(vehicle.id, 'package', pkg.id)}
                                            className={`border-2 rounded-xl p-4 cursor-pointer transition-all duration-200 ${
                                              isSelected 
                                                ? "border-[#10B5DB] bg-[#10B5DB]/5 shadow-sm" 
                                                : "border-gray-200 hover:border-[#10B5DB]/50 hover:shadow-sm"
                                            }`}
                                          >
                                            <div className="flex justify-between items-start mb-2">
                                              <span className="font-medium text-gray-900">{pkg.name}</span>
                                              <span className="font-bold text-[#10B5DB]">
                                                ${pkg.price}
                                              </span>
                                            </div>
                                            <p className="text-sm text-gray-600">{pkg.description}</p>
                                            {pkg.includes && (
                                              <div className="mt-2 text-xs text-gray-500">
                                                <span className="font-medium">Includes:</span>
                                                <ul className="list-disc list-inside mt-1">
                                                  {pkg.includes.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                  ))}
                                                </ul>
                                              </div>
                                            )}
                                            {isSelected && (
                                              <div className="mt-2 text-[#10B5DB] flex items-center text-sm">
                                                <Check size={16} className="mr-2" /> Selected
                                              </div>
                                            )}
                                          </div>
                                        );
                                      })}
                                    </div>

                                    {/* Vehicle Details */}
                                    {vehicle.package && (
                                      <>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                                          {/* Vehicle Type Input */}
                                          <div className="space-y-2">
                                            <Label htmlFor={`${vehicle.id}-vehicleType`} className="text-gray-900">
                                              Vehicle Type*
                                            </Label>
                                            <Input
                                              type="text"
                                              id={`${vehicle.id}-vehicleType`}
                                              value={vehicle.vehicleType}
                                              onChange={(e) => updateVehicleBooking(vehicle.id, 'vehicleType', e.target.value)}
                                              placeholder="Vehicle Type *"
                                              className="bg-white border-gray-300"
                                              required
                                            />
                                          </div>
                                          {/* Other Vehicle Fields */}
                                          {[
                                            { id: "vehicleYear", label: "Year*", placeholder: "e.g., 2023" },
                                            { id: "vehicleMake", label: "Make*", placeholder: "e.g., Toyota" },
                                            { id: "vehicleModel", label: "Model*", placeholder: "e.g., Camry" },
                                            { id: "vehicleColor", label: "Color*", placeholder: "e.g., Red" }
                                          ].map((field) => (
                                            <div key={field.id} className="space-y-2">
                                              <Label htmlFor={`${vehicle.id}-${field.id}`} className="text-gray-900">
                                                {field.label}
                                              </Label>
                                              <Input
                                                type="text"
                                                id={`${vehicle.id}-${field.id}`}
                                                value={vehicle[field.id as keyof VehicleBooking] as string}
                                                onChange={(e) => updateVehicleBooking(vehicle.id, field.id as keyof VehicleBooking, e.target.value)}
                                                placeholder={field.placeholder}
                                                className="bg-white border-gray-300"
                                                required
                                              />
                                            </div>
                                          ))}
                                        </div>

                                        {/* Vehicle Length Input (for perFoot pricing) */}
                                        {requiresLength && (
                                          <div className="space-y-2">
                                            <Label htmlFor={`${vehicle.id}-vehicleLength`} className="text-gray-900">
                                              Vehicle Length (feet)*
                                            </Label>
                                            <Input
                                              type="number"
                                              id={`${vehicle.id}-vehicleLength`}
                                              value={vehicle.vehicleLength || ""}
                                              onChange={(e) => updateVehicleBooking(vehicle.id, 'vehicleLength', e.target.value)}
                                              className="bg-white border-gray-300"
                                              placeholder="Enter length in feet"
                                              required
                                              min="1"
                                              step="0.1"
                                            />
                                            <p className="text-sm text-gray-500 mt-1">
                                              Price will be calculated based on the length of your vehicle
                                            </p>
                                          </div>
                                        )}
                                      </>
                                    )}
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          );
                        })}

                        {/* Navigation */}
                        <div className="flex justify-end pt-6 border-t border-gray-200">
                          <Button 
                            type="button"
                            onClick={nextStep} 
                            disabled={!areAllVehiclesValid}
                            className="bg-[#10B5DB] text-white hover:bg-[#10B5DB]/90 px-8 py-2.5"
                          >
                            Continue to Services
                            <ChevronRight size={18} className="ml-2" />
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 2 - Date & Time - Spark Ride Style */}
                    {currentStep === 2 && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="space-y-6"
                      >
                        <div className="text-center mb-8">
                          <div className="w-12 h-12 bg-[#10B5DB]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Package className="h-6 w-6 text-[#10B5DB]" />
                          </div>
                          <h2 className="text-2xl font-bold text-gray-900">Service Selection</h2>
                          <p className="text-gray-600 mt-2">Choose the perfect services for your vehicle</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {/* Date Picker */}
                          <div className="space-y-2">
                            <Label className="text-gray-900 font-medium">Preferred Date *</Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full justify-start text-left font-normal h-12 bg-white border-gray-300",
                                    !formData.date && "text-gray-500"
                                  )}
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {formData.date
                                    ? format(new Date(formData.date), "PPP")
                                    : "Select a date"}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={formData.date ? new Date(formData.date) : undefined}
                                  onSelect={handleDateSelect}
                                  disabled={(date) => {
                                    const today = new Date();
                                    today.setHours(0, 0, 0, 0);
                                    return date < today || date.getDay() === 0;
                                  }}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                          </div>

                          {/* Time Picker */}
                          <div className="space-y-2">
                            <Label className="text-gray-900 font-medium">Preferred Time *</Label>
                            <Select
                              value={formData.timeSlot}
                              onValueChange={(val) => setFormData(prev => ({ ...prev, timeSlot: val }))}
                            >
                              <SelectTrigger className="h-12 bg-white border-gray-300 text-gray-900">
                                <SelectValue placeholder="Select time slot" />
                              </SelectTrigger>
                              <SelectContent>
                                {timeSlots.map((slot: string) => (
                                  <SelectItem key={slot} value={slot}>
                                    {slot}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="flex justify-between pt-6 border-t border-gray-200">
                          <Button
                            type="button"
                            onClick={prevStep}
                            variant="outline"
                            className="border-gray-300 text-gray-700 hover:bg-gray-50"
                          >
                            Back
                          </Button>
                          <Button
                            type="button"
                            onClick={nextStep}
                            className="bg-[#10B5DB] text-white hover:bg-[#10B5DB]/90 px-8 py-2.5"
                            disabled={!formData.date || !formData.timeSlot}
                          >
                            Continue to Details
                            <ChevronRight size={18} className="ml-2" />
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 3 - Personal Info - Spark Ride Style */}
                    {currentStep === 3 && (
                      <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-6">
                        <div className="text-center mb-8">
                          <div className="w-12 h-12 bg-[#10B5DB]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <User className="h-6 w-6 text-[#10B5DB]" />
                          </div>
                          <h2 className="text-2xl font-bold text-gray-900">Your Information</h2>
                          <p className="text-gray-600 mt-2">Finalize your booking details</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Personal Information */}
                          <div className="space-y-4">
                            <h3 className="font-semibold text-gray-900">Personal Information</h3>
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <Label htmlFor="firstName">First Name *</Label>
                                <Input 
                                  id="firstName"
                                  name="firstName" 
                                  placeholder="John" 
                                  value={formData.firstName} 
                                  onChange={handleChange} 
                                  required 
                                  className="bg-white border-gray-300"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input 
                                  id="lastName"
                                  name="lastName" 
                                  placeholder="Doe" 
                                  value={formData.lastName} 
                                  onChange={handleChange} 
                                  className="bg-white border-gray-300"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="email">Email Address *</Label>
                                <Input 
                                  id="email"
                                  name="email" 
                                  type="email" 
                                  placeholder="john@example.com" 
                                  value={formData.email} 
                                  onChange={handleChange} 
                                  required 
                                  className="bg-white border-gray-300"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number *</Label>
                                <Input
                                  id="phone"
                                  name="phone"
                                  placeholder="+1 (555) 123-4567"
                                  value={formData.phone}
                                  onChange={handlePhoneChange}
                                  required
                                  className="bg-white border-gray-300"
                                  maxLength={17}
                                />
                              </div>
                            </div>
                          </div>

                          {/* Location & Scheduling */}
                          <div className="space-y-4">
                            <h3 className="font-semibold text-gray-900">Location & Scheduling</h3>
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <Label htmlFor="address">Address *</Label>
                                <Input 
                                  id="address"
                                  name="address" 
                                  placeholder="123 Main Street" 
                                  value={formData.address} 
                                  onChange={handleChange} 
                                  required 
                                  className="bg-white border-gray-300"
                                />
                              </div>
                              
                              <div className="grid grid-cols-3 gap-3">
                                <div className="space-y-2">
                                  <Label htmlFor="city">City *</Label>
                                  <Input
                                    id="city"
                                    required
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder="City"
                                    className="bg-white border-gray-300"
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="state">State *</Label>
                                  <Input
                                    id="state"
                                    required
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    placeholder="State"
                                    className="bg-white border-gray-300"
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="zip">ZIP Code *</Label>
                                  <Input
                                    id="zip"
                                    required
                                    name="zip"
                                    value={formData.zip}
                                    onChange={handleChange}
                                    placeholder="12345"
                                    className="bg-white border-gray-300"
                                    maxLength={5}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Additional Notes */}
                        <div className="space-y-2">
                          <Label htmlFor="notes">Special Instructions (Optional)</Label>
                          <Textarea
                            id="notes"
                            name="notes"
                            placeholder="Any special requests or instructions for our team..."
                            value={formData.notes}
                            onChange={handleChange}
                            className="bg-white border-gray-300 min-h-[100px]"
                          />
                        </div>

                        {/* Promo Code */}
                        <div className="border-t border-gray-200 pt-6">
                          <Label htmlFor="promoCode" className="text-gray-900 font-medium">Promo Code</Label>
                          <div className="flex gap-3 mt-2">
                            <Input
                              id="promoCode"
                              type="text"
                              placeholder="Enter promo code"
                              value={promoCode}
                              onChange={handlePromoCodeChange}
                              className="flex-1 bg-white border-gray-300"
                              disabled={!!appliedPromo}
                            />
                            {appliedPromo ? (
                              <Button
                                type="button"
                                onClick={removePromoCode}
                                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2"
                              >
                                Remove
                              </Button>
                            ) : (
                              <Button
                                type="button"
                                onClick={applyPromoCode}
                                className="bg-[#10B5DB] text-white hover:bg-[#10B5DB]/90 px-4 py-2"
                                disabled={!promoCode.trim()}
                              >
                                Apply Code
                              </Button>
                            )}
                          </div>
                          {promoError && (
                            <p className="text-red-600 text-sm mt-2">{promoError}</p>
                          )}
                          {appliedPromo && (
                            <p className="text-green-600 text-sm mt-2">
                              ✅ Promo code applied! {appliedPromo.discount}% discount
                            </p>
                          )}
                        </div>

                        {/* Booking Summary */}
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                          <h3 className="font-semibold text-lg mb-3 text-gray-900">Booking Summary</h3>
                          <div className="space-y-4">
                            {formData.vehicleBookings.map((vehicle, index) => {
                              const serviceType = serviceTypes.find(st => st.id === vehicle.serviceType);
                              const mainService = mainServices.find(ms => ms.id === vehicle.mainService);
                              let selectedPackage;
                              let vehicleTotal = 0;

                              if (mainService) {
                                selectedPackage = mainService.packages.find(p => p.id === vehicle.package);
                              } else if (serviceType?.variants && vehicle.variant) {
                                const variant = serviceType.variants.find(v => v.id === vehicle.variant);
                                selectedPackage = variant?.packages.find(p => p.id === vehicle.package);
                              } else {
                                selectedPackage = serviceType?.packages?.find(p => p.id === vehicle.package);
                              }

                              if (selectedPackage) {
                                let packagePrice = typeof selectedPackage.price === 'string' ? Number(selectedPackage.price) || 0 : selectedPackage.price;
                                if (selectedPackage.pricingType === "perFoot" && vehicle.vehicleLength) {
                                  packagePrice *= parseFloat(vehicle.vehicleLength);
                                }
                                vehicleTotal += packagePrice;
                              }

                              return (
                                <div key={vehicle.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                                  <h4 className="font-medium mb-2 text-gray-900">Vehicle {index + 1}</h4>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                                    <div>
                                      <span className="font-medium text-gray-600">Service:</span> 
                                      <span className="text-gray-900 ml-1">{mainService?.name || serviceType?.name}</span>
                                      {vehicle.variant && (
                                        <span className="text-gray-600">
                                          {" "}({serviceType?.variants?.find(v => v.id === vehicle.variant)?.name})
                                        </span>
                                      )}
                                    </div>
                                    <div>
                                      <span className="font-medium text-gray-600">Package:</span> 
                                      <span className="text-gray-900 ml-1">{selectedPackage?.name}</span>
                                    </div>
                                    <div>
                                      <span className="font-medium text-gray-600">Vehicle:</span> 
                                      <span className="text-gray-900 ml-1">{vehicle.vehicleYear} {vehicle.vehicleMake} {vehicle.vehicleModel}</span>
                                    </div>
                                    <div>
                                      <span className="font-medium text-gray-600">Color:</span> 
                                      <span className="text-gray-900 ml-1">{vehicle.vehicleColor}</span>
                                    </div>
                                    {vehicle.additionalServices.length > 0 && (
                                      <div className="md:col-span-2">
                                        <span className="font-medium text-gray-600">Add-ons:</span> 
                                        <span className="text-gray-900 ml-1">{vehicle.additionalServices.length} service(s)</span>
                                      </div>
                                    )}
                                    <div className="md:col-span-2 text-right font-medium text-gray-900">
                                      Vehicle Total: ${vehicleTotal.toFixed(2)}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}

                            {/* Promo Code Discount Display */}
                            {appliedPromo && (
                              <>
                                <div className="flex justify-between text-green-600">
                                  <span>Promo Code ({appliedPromo.code}):</span>
                                  <span>-{appliedPromo.discount}%</span>
                                </div>
                                <div className="flex justify-between text-green-600">
                                  <span>Discount Amount:</span>
                                  <span>-${calculateDiscount().toFixed(2)}</span>
                                </div>
                              </>
                            )}

                            <div className="flex justify-between font-semibold text-lg border-t border-gray-200 pt-2">
                              <span className="text-gray-900">Total ({formData.vehicleBookings.length} vehicles):</span>
                              <span className="text-[#10B5DB]">${calculateFinalPrice().toFixed(2)}</span>
                            </div>

                            {appliedPromo && (
                              <p className="text-sm text-gray-600 mt-1">
                                * Original price: ${calculateTotalPrice().toFixed(2)}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Submit */}
                        <div className="flex justify-between pt-6 border-t border-gray-200">
                          <Button
                            type="button"
                            onClick={prevStep}
                            variant="outline"
                            className="border-gray-300 text-gray-700 hover:bg-gray-50"
                          >
                            Back
                          </Button>
                          <Button
                            type="submit"
                            className="bg-[#10B5DB] hover:bg-[#10B5DB]/90 text-white px-8 py-2.5 flex items-center"
                            disabled={
                              isSubmitting ||
                              !formData.firstName ||
                              !formData.lastName ||
                              !formData.email ||
                              !formData.phone ||
                              !formData.address ||
                              !formData.city ||
                              !formData.state ||
                              !formData.zip
                            }
                          >
                            {isSubmitting ? (
                              <>
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                Processing...
                              </>
                            ) : (
                              "Confirm Booking"
                            )}
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Dialog - Spark Ride Style */}
      {showConfirmation && (
        <Dialog open={showConfirmation} onOpenChange={closeConfirmation}>
          <DialogContent className="sm:max-w-lg bg-white border border-gray-200 text-gray-900 shadow-lg rounded-xl">
            <DialogHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 bg-gradient-to-br from-[#10B5DB]/10 to-[#10B5DB]/5 rounded-full flex items-center justify-center p-4 border border-[#10B5DB]/20">
                  <Sparkles className="h-12 w-12 text-[#10B5DB]" />
                </div>
              </div>
              
              <DialogTitle className="text-2xl font-bold text-gray-900 text-center">
                Booking Confirmed! 🎉
              </DialogTitle>
              <DialogDescription className="text-gray-600 text-center mt-2">
                Thank you <span className="font-semibold text-gray-900">{formData.firstName}</span>!
                Your booking has been successfully scheduled.
              </DialogDescription>
            </DialogHeader>

            <div className="mt-6 border border-gray-200 rounded-lg bg-gray-50 p-6">
              <h3 className="text-lg font-semibold mb-4 text-center text-gray-900">Appointment Details</h3>
              <div className="grid grid-cols-2 gap-y-3 text-sm">
                <span className="font-medium text-gray-600">Vehicles:</span>
                <span className="text-right text-gray-900">
                  {formData.vehicleBookings.map(v => `${v.vehicleYear} ${v.vehicleMake} ${v.vehicleModel}`).join(", ")}
                </span>
                <span className="font-medium text-gray-600">Date:</span>
                <span className="text-right text-gray-900">
                  {formData.date ? new Date(formData.date).toLocaleDateString() : "N/A"}
                </span>
                <span className="font-medium text-gray-600">Time Slot:</span>
                <span className="text-right text-gray-900">{formData.timeSlot || "N/A"}</span>
                <span className="font-medium text-gray-600">Services:</span>
                <span className="text-right text-gray-900">
                  {formData.vehicleBookings.flatMap(v => {
                    const serviceType = serviceTypes.find(st => st.id === v.serviceType);
                    const mainService = mainServices.find(ms => ms.id === v.mainService);
                    return mainService?.name || serviceType?.name || "";
                  }).filter(Boolean).join(", ")}
                </span>
                <span className="font-medium text-gray-600">Subtotal:</span>
                <span className="text-right text-gray-900">${calculateTotalPrice().toFixed(2)}</span>
                {appliedPromo && (
                  <>
                    <span className="font-medium text-green-600">Promo Discount:</span>
                    <span className="text-right text-green-600">-${calculateDiscount().toFixed(2)}</span>
                  </>
                )}
                <span className="font-medium text-gray-900">Total:</span>
                <span className="font-bold text-[#10B5DB] text-right text-lg">${calculateFinalPrice().toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6">
              <Button
                onClick={closeConfirmation}
                className="w-full bg-[#10B5DB] text-white hover:bg-[#10B5DB]/90 transition-all duration-300 font-semibold shadow-sm hover:shadow-md"
              >
                Return to Home
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default BookingForm;