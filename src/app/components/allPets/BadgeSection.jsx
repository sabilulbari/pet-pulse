import { Headset, HeartHandshake, ShieldCheck, Truck } from 'lucide-react';
import React from 'react';

const BadgeSection = () => {
    return (
      <div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-gray-100">
          <div className="flex items-start gap-3 p-3">
            <div className="p-2.5 bg-indigo-50 rounded-xl text-indigo-600 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-gray-900 mb-0.5">Verified Sellers</h4>
              <p className="text-[10px] leading-relaxed text-gray-400 font-medium">All sellers are verified for your safety</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3">
            <div className="p-2.5 bg-rose-50 rounded-xl text-rose-500 shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-gray-900 mb-0.5">Health Guarantee</h4>
              <p className="text-[10px] leading-relaxed text-gray-400 font-medium">All pets come with a health guarantee</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3">
            <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-500 shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-gray-900 mb-0.5">Safe Delivery</h4>
              <p className="text-[10px] leading-relaxed text-gray-400 font-medium">Secure and comfortable pet delivery</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3">
            <div className="p-2.5 bg-purple-50 rounded-xl text-purple-600 shrink-0">
              <Headset className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-gray-900 mb-0.5">24/7 Support</h4>
              <p className="text-[10px] leading-relaxed text-gray-400 font-medium">Our team is here to help you anytime</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BadgeSection;