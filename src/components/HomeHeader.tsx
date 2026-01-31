import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const HomeHeader = () => {
  const navigate = useNavigate();

  return (
     <header className="border-b border-accent bg-card backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-lg" onClick={() => navigate("/")}>
              <img
                src="/name_logo.png"
                alt="Stratosphere logo"
                className="h-8 object-contain"
              />
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Button
              onClick={() => navigate("/")}
              size="sm"
              className="bg-primary hover:bg-primary/90"
            >
              Home
            </Button>
          </nav>
        </div>
      </header>
  );
};
