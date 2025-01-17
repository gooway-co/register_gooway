import React from "react";

const BannerPartner: React.FC = () => {
    return (
        <div className="bg-gray-2">
            <div className="mx-auto w-full max-w-[calc(var(--container-max)+(var(--container-pad)*2))] px-container py-40 text-center lg:py-48">
                <img alt="" loading="lazy" width="72" height="68" decoding="async" data-nimg="1" className="object-contain mx-auto" style={{color:"transparent"}}  src="https://mindtrip.ai/cdn-cgi/image/w=256,format=webp,fit=cover/https://images.mindtrip.ai/web/heart.png" />
                <h2 className="mt-9 text-5xl font-bold tracking-tight sm:text-6xl">Asóciese con Gooway.</h2>
                <p className="mb-9 mt-[1em] text-balance text-lg">
                   Quieres ayudar a llevar el mundo a los viajeros a través de tecnología de vanguardia o contenido robusto?
                </p>
            </div>
        </div>
    );
};

export default BannerPartner