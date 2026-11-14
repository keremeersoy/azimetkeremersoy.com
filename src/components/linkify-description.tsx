import React from "react";
import { cn } from "@/lib/utils";
import CustomizedLink from "./customized-link";

const LinkifyDescription = ({
  description,
  links,
  className,
}: {
  description: string;
  links?: { url: string; text: string }[];
  className?: string;
}) => {
  const paragraphs = description
    .split("\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <>
      {paragraphs.map((paragraph, pIndex) => {
        const parts = paragraph.split(/{(\d+)}/g);
        return (
          <p key={pIndex} className={cn("mb-3 text-sm leading-relaxed", className)}>
            {parts.map((part, index) => {
              // Odd indexes are the captured {n} placeholders.
              if (index % 2 === 1) {
                const link = links?.[parseInt(part, 10)];
                if (link) {
                  return (
                    <CustomizedLink key={index} href={link.url} passHref>
                      {link.text}
                    </CustomizedLink>
                  );
                }
              }
              return <React.Fragment key={index}>{part}</React.Fragment>;
            })}
          </p>
        );
      })}
    </>
  );
};

export default LinkifyDescription;
