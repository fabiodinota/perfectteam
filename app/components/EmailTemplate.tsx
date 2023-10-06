interface EmailData {
    naam: string;
    tel: string;
    email: string;
    bericht: string;
}

const EmailTemplate: React.FC<Readonly<EmailData>> = ({
    naam,
	tel,
	email,
	bericht,
}) => (
    <div className="bg-gray-100 p-8">
        <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Contact Submission van: {email}</h3>
            <p className="mb-2"><span className="font-bold">Naam:</span> {naam}</p>
            <p className="mb-2"><span className="font-bold">Tel:</span> {tel}</p>
            <p className="mb-2"><span className="font-bold">Email:</span> {email}</p>
            <p className="mb-2">
                <p className="font-bold">Bericht:</p> 
                {bericht}
            </p>
        </div>
    </div>
);

export default EmailTemplate;