"use client";

import React, { FormEvent, useState } from "react";
import axios from "axios";

const ContactSection = () => {
	interface ContactInfoProps {
		naam: string;
		tel: string;
		email: string;
		bericht: string;
	}

	const [contactInfo, setContactInfo] = useState<ContactInfoProps>({
		naam: "",
		tel: "",
		email: "",
		bericht: "",
	});

	const [message, setMessage] = useState<string>("");

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		if (
			contactInfo.naam === "" ||
			contactInfo.tel === "" ||
			contactInfo.email === "" ||
			contactInfo.bericht === ""
		) {
			setMessage("Please fill out all the required fields.");
			return;
		}

		const EmailData = {
			naam: contactInfo.naam,
			tel: contactInfo.tel,
			email: contactInfo.email,
			bericht: contactInfo.bericht,
		};

		axios
			.post("/api/sendEmail", EmailData, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((response) => {
				setMessage("Message sent successfully!");
			})
			.catch((err) => {
				setMessage("Something went wrong, please try again later.");
			});
	};
	return (
		<section
			id="contact"
			className="w-full h-full flex justify-center items-center flex-col pt-[100px] px-5"
		>
			<h2 className="text-[36px] font-bold text-center">
				Contacteer Ons
			</h2>
			<p className="text-[20px] max-w-[800px] text-center pt-3">
				Neem gerust contact met ons op voor meer informatie of vraag een
				gratis proefles aan.
			</p>
			<form
				action=""
				className="w-full max-w-[800px] flex flex-col justify-center items-start gap-5 mt-[50px]"
			>
				<div className="flex flex-col sm:flex-row gap-5 w-full">
					<div className="flex flex-col w-full gap-2">
						<label htmlFor="naam">Naam</label>
						<input
							type="text"
							name="naam"
							id="naam"
                            autoComplete="name"
                            onChange={(e) =>
                                setContactInfo({
                                    ...contactInfo,
                                    naam: e.currentTarget.value,
                                })
                            }
							className="w-full bg-[#151515] h-[60px] border border-[#3C3C3C] p-5 focus:outline-none active:outline-none"
						/>
					</div>
					<div className="flex flex-col w-full gap-2">
						<label htmlFor="telefoon">Telefoon</label>
						<input
							type="tel"
							name="telefoon"
							id="telefoon"
                            autoComplete="tel"
                            onChange={(e) =>
                                setContactInfo({
                                    ...contactInfo,
                                    tel: e.currentTarget.value,
                                })
                            }
							className="w-full bg-[#151515] h-[60px] border border-[#3C3C3C] p-5 focus:outline-none active:outline-none"
						/>
					</div>
				</div>
				<div className="flex flex-col w-full gap-2">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
                        autoComplete="email"
                        onChange={(e) =>
							setContactInfo({
								...contactInfo,
								email: e.currentTarget.value,
							})
						}
						className="w-full bg-[#151515] h-[60px] border border-[#3C3C3C] p-5 focus:outline-none active:outline-none"
					/>
				</div>
				<div className="flex flex-col w-full gap-2">
					<label htmlFor="bericht">Bericht</label>
					<textarea
						name="bericht"
						id="bericht"
						onChange={(e) =>
							setContactInfo({
								...contactInfo,
								bericht: e.currentTarget.value,
							})
						}
						className="w-full bg-[#151515] min-h-[200px] max-h-[300px] border border-[#3C3C3C] p-5 focus:outline-none active:outline-none"
					></textarea>
				</div>
				<button
					onClick={(e) => handleSubmit(e)}
					type="submit"
                    name="submit"
					className="bg-green text-background w-full h-[60px]"
				>
					Verstuur
				</button>
                {message && (
                    <p className={`text-[20px] text-center ${message === "Message sent successfully!" ? "text-green" : "text-red-600"}`}>{message}</p>
                )}
			</form>
		</section>
	);
};

export default ContactSection;
