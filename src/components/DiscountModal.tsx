"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface DiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DiscountModal = ({ isOpen, onClose }: DiscountModalProps) => {
  const router = useRouter();
  const [promoData, setPromoData] = useState<{
    title: string;
    description: string;
    discountText: string;
    discountCode: string;
    buttonText: string;
  } | null>(null);

  useEffect(() => {
    const fetchPromoCode = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/promo-codes/agent/${process.env.NEXT_PUBLIC_AGENT_ID}`);
        const response = await res.json();
        console.log("Fetched data in modal:", response);

        if (response && response.success && response.data && response.data.length > 0) {
          const activePromo = response.data.find((promo: { isActive: boolean }) => promo.isActive);
          if (activePromo) {
            setPromoData({
              title: "🎉 Special Offer!",
              description: `Use promo code ${activePromo.promoCode} to get ${activePromo.discountPercentage}% OFF your first detailing service!`,
              discountText: `${activePromo.discountPercentage}% OFF`,
              discountCode: activePromo.promoCode,
              buttonText: "Claim My Discount",
            });
          } else {
            console.log("No active promo codes found in modal");
          }
        } else {
          console.log("No valid data from API in modal");
        }
      } catch (error) {
        console.error('Error fetching promo code in modal:', error);
      }
    };

    fetchPromoCode();

    const checkClaimed = async () => {
      try {
        const response = await fetch('/api/discount-claim');
        const data = await response.json();
        // Removed unused setHasClaimed
      } catch (error) {
        console.error('Error checking discount claim:', error);
      }
    };
    checkClaimed();
  }, []);

  if (!isOpen || !promoData) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="bg-white rounded-xl max-w-md w-full p-6 animate-scaleIn shadow-xl">
        <div className="text-center">
          <div className="flex justify-end mb-4">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800 transition-colors"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* Header */}
          <div className="mb-5">
            <div className="bg-gradient-to-r from-primary to-blue-500 text-primary-foreground px-6 py-3 rounded-lg">
              <h3 className="text-2xl font-bold">{promoData.title}</h3>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="text-muted-foreground mb-4">
              {promoData.description}
            </p>
            <div className="flex justify-center items-center gap-2 mb-4">
              <span className="text-4xl font-bold text-primary">
                {promoData.discountText}
              </span>
            </div>
          </div>

          {/* Discount Code */}
          <div className="bg-muted p-4 rounded-lg mb-6 border border-dashed border-primary/30">
            <p className="text-sm text-muted-foreground mb-1">Use promo code:</p>
            <p className="text-xl font-mono font-bold text-primary bg-background py-2 rounded-md">
              {promoData.discountCode}
            </p>
          </div>

          {/* Button */}
          <div className="flex flex-col gap-3">
            <button
              onClick={() => {
                // Store promo code and discount for auto-apply in booking form
                sessionStorage.setItem("auto_apply_promo", promoData.discountCode);
                const discountPercentage = parseInt(promoData.discountText.replace('% OFF', ''));
                sessionStorage.setItem("auto_apply_promo_discount", discountPercentage.toString());
                localStorage.setItem('discountClaimed', 'true');
                onClose();
                router.push('/booking');
              }}
              className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-primary-foreground font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {promoData.buttonText}
            </button>
            <button
              onClick={() => {
                // Remind me later: hide for 10 minutes
                const remindUntil = Date.now() + 10 * 60 * 1000; // 10 minutes
                localStorage.setItem('remindLaterUntil', remindUntil.toString());
                onClose();
              }}
              className="bg-muted hover:bg-muted/80 text-muted-foreground font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Remind me later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountModal;