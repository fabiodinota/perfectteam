import EmailTemplate from '@/app/components/EmailTemplate';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        let body = await new Response(req.body).text();

        const { naam, tel, email, bericht } = JSON.parse(body);

        const data = await resend.emails.send({
            from: "contact@fabiodinota.com",
            to: "contact@fabiodinota.com",
            subject: "Nieuw Bericht van perfectteam.be",
            react: EmailTemplate({ naam, tel, email, bericht }),
            text: '', // add empty string to fix error
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message || error })
    }
}

