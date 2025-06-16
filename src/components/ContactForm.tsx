import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function ContactForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
        <CardDescription>Fill out the form below to get in touch with us.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Input type="text" placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <Input type="email" placeholder="Your email" />
          </div>
          <div className="space-y-2">
            <Input type="text" placeholder="Subject" />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Send Message</Button>
      </CardFooter>
    </Card>
  );
} 