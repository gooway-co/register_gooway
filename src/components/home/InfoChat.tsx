import React from 'react';
import chatAnaPhone from '../../assets/images/phome.webp'

const InfoChat: React.FC = () => {

    return (
        <section className="container-info-ana">
            <div className="mx-auto max-w-md text-pretty">
                <h3 className="mb-5 text-4xl font-semibold sm:text-5xl text-green-600">Start chatting with us.</h3>
                <p className="text-lg">Ask us for suggestions for any destination or ask us for an entire itinerary. Be as specific as you can about the types of experiences that you like or take our quiz to determine your travel style.</p>
            </div>

            <div className='-mx-container lg:mr-0 lg:order-first'>
                <a href="/chat">
                    <img alt="" loading="lazy" width="720" height="641" decoding="async" data-nimg="1" className="object-contain mx-auto"   src={chatAnaPhone}/>
                </a>
            </div>
        </section>
    );

};
export default InfoChat;