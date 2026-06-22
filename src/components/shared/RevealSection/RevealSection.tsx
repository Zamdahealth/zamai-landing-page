import { type ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface RevealSectionProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  overflow: hidden;
`;

const Animated = styled.div<{ visible: boolean; direction: string; delay: number }>`
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ visible, direction }) => {
    if (visible) return "translate3d(0, 0, 0)";
    if (direction === "left") return "translate3d(-30px, 0, 0)";
    if (direction === "right") return "translate3d(30px, 0, 0)";
    return "translate3d(0, 30px, 0)";
  }};
  transition: opacity 0.75s ease ${({ delay }) => delay}ms,
    transform 0.75s ease ${({ delay }) => delay}ms,
    filter 0.75s ease ${({ delay }) => delay}ms;
  will-change: opacity, transform;
  filter: ${({ visible }) => (visible ? "blur(0px)" : "blur(1px)")};
`;

const RevealSection = ({ children, delay = 0, direction = "up" }: RevealSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <Wrapper ref={ref}>
      <Animated visible={visible} direction={direction} delay={delay}>
        {children}
      </Animated>
    </Wrapper>
  );
};

export default RevealSection;
