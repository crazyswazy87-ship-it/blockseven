import { useRef } from "react";
import { ScrollSplitCard } from "../../component/ScrollSplitCard";

const Home= () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-red-400">
      <ScrollSplitCard
        containerRef={containerRef}
        imageSrc="https://i.pinimg.com/736x/78/3e/ed/783eed6cf8fa787a285da85f233d1b78.jpg"
        cards={[
          {
            title: "Going Zero to One",
            description:
              "If you're navigating a new business... breaking into a new market.",
            bgColor: "#e2e2e2",
            textColor: "#111111",
          },
          {
            title: "Scaling from One to N",
            description:
              "If you've achieved Product/Market Fit...",
            bgColor: "#1a5bcf",
            textColor: "#ffffff",
          },
          {
            title: "Need Quick Solutions",
            description:
              "If you know exactly what you want and need...",
            bgColor: "#1c1c1c",
            textColor: "#ffffff",
          },
        ]}
      />
    </div>
  );
}

export default Home;