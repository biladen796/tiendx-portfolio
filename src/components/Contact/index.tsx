import React, { FormEvent, useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { TileLayer, Marker, Popup, MapContainer } from 'react-leaflet';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef<HTMLFormElement | null>(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => {
            clearTimeout(timeout);
        };
    }, []);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        form.current && emailjs
            .sendForm(
                'service_g1rwls5',
                'template_mjzo88o',
                form.current,
                'HwwmGKkgVCZWm-6Fm'
            )
            .then(
                () => {
                    alert('Message successfully sent!');
                    window.location.reload();
                },
                () => {
                    alert('Failed to send the message, please try again');
                }
            );
    };

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don&apos;t hesitate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
          Do Xuan Tien,
                    <br />
          Vietnam,
                    <br />
          IA20 Ciputra <br />
          Hanoi <br />
                    <br />
                    <span>doxuantien96@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[21.085928, 105.788292]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[21.085928, 105.788292]}>
                            <Popup>Do Xuan Tien lives here, come over for a cup of coffee :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader active type="pacman" />
        </>
    );
};

export default Contact;