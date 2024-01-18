import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${process.env.CURRENT_EMAIL_ORIGIN_PATH}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: [email],
    subject: "Confirm your email",
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
  });
};

export const sendResetPasswordEmail = async (email: string, token: string) => {
  const ResetLink = `${process.env.CURRENT_EMAIL_ORIGIN_PATH}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: [email],
    subject: "Reset your password",
    html: `<p>Click <a href="${ResetLink}">here</a> to reset your password.</p>`,
  });
};
