"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FieldLabel, Input, TextArea } from "@/components/ui/Input";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Wire up to a real email service (Resend, Formspree, etc.)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Card className="border-terracotta-500/25 bg-sand-50/80">
        <p className="type-eyebrow text-terracotta-600">Thank you</p>
        <p className="type-headline mt-4 text-charcoal-900">
          Your message has been received.
        </p>
        <p className="type-body-lg mt-3 text-charcoal-700/75">
          Note: this form is a UI demonstration. Email delivery is not yet
          connected. Please reach us directly by phone until then.
        </p>
      </Card>
    );
  }

  return (
    <Card>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <FieldLabel htmlFor="name">Your name</FieldLabel>
            <Input id="name" name="name" type="text" required autoComplete="name" />
          </div>
          <div>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
            />
          </div>
        </div>

        <div>
          <FieldLabel htmlFor="subject">Subject</FieldLabel>
          <Input id="subject" name="subject" type="text" />
        </div>

        <div>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <TextArea id="message" name="message" rows={6} required />
        </div>

        <div className="pt-2">
          <Button type="submit" size="lg">
            Send message
          </Button>
          <p className="mt-4 text-xs leading-relaxed text-charcoal-700/60">
            This form is a UI demonstration. Email delivery is not yet
            connected.
          </p>
        </div>
      </form>
    </Card>
  );
}
