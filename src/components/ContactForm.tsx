import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function ContactForm() {
  return (
    <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-4">
      <CardHeader className="px-4 sm:px-6 py-4 sm:py-6">
        <CardTitle className="text-xl sm:text-2xl font-bold">Contact Us</CardTitle>
        <CardDescription className="text-sm sm:text-base">
          Fill out the form below to get in touch with us.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4 sm:px-6 py-4 sm:py-6">
        <form className="space-y-4 sm:space-y-6">
          <div className="space-y-2">
            <Input 
              type="text" 
              placeholder="Your name" 
              className="w-full px-3 py-2 sm:py-3 text-base"
            />
          </div>
          <div className="space-y-2">
            <Input 
              type="email" 
              placeholder="Your email" 
              className="w-full px-3 py-2 sm:py-3 text-base"
            />
          </div>
          <div className="space-y-2">
            <Input 
              type="text" 
              placeholder="Subject" 
              className="w-full px-3 py-2 sm:py-3 text-base"
            />
          </div>
        </form>
      </CardContent>
      <CardFooter className="px-4 sm:px-6 py-4 sm:py-6">
        <Button className="w-full py-2 sm:py-3 text-base font-medium">
          Send Message
        </Button>
      </CardFooter>
    </Card>
  );
} 