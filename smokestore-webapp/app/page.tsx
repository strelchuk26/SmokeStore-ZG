import { Button } from "@/components/ui/button";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function Home() {
    return (
        <div className="wrapper flex flex-col">
            <h1 className="p-4 text-4xl font-black">Smoke Store</h1>
            <div className="flex scroll-smooth">
                <Button variant="outline" className="m-2">
                    Shop Now
                </Button>
                <Button variant="outline" className="m-2">
                    Shop Now
                </Button>
                <Button variant="outline" className="m-2">
                    Shop Now
                </Button>
                <Button variant="outline" className="m-2">
                    Shop Now
                </Button>
            </div>
            <div className="ml-4 font-bold">Popular choice</div>
            <div className="flex flex-wrap gap-4 p-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                        <CardAction>Card Action</CardAction>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                        <CardAction>Card Action</CardAction>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                        <CardAction>Card Action</CardAction>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
            </div>
            <div
                className="p-1 fixed w-full bottom-0 flex justify-center bg-white/10 backdrop-blur-md
                    supports-[backdrop-filter]:backdrop-blur-md border-t border-gray-200
                    border-opacity-20 z-50"
            >
                <Button variant={"default"}>Home</Button>
            </div>
        </div>
    );
}
