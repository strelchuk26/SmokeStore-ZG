import { Search } from "lucide-react";

export const Header = () => {
    return (
        <>
            <div className="bg-white/10 backdrop-blur-md flex justify-between items-center px-4 pt-2 pb-4 sticky top-0 z-50">
                <div>
                    <h1 className="text-3xl font-black">Smoke Store</h1>
                </div>
                <div className="flex gap-4 items-center">
                    <Search />
                </div>
            </div>
        </>
    );
};
