import { Container, Heading, IconContainer, Typography } from "@/components/ui";
import { IconArticle } from "@/components/ui/icons";
import { blog } from "@/contents/blog";
import { TypographySize } from "@/types/ui/typography";
import Image from "next/image";

interface PropTypes {
  classes?: string;
}

export function Blog({ classes }: PropTypes) {
  return (
    <div className={classes}>
      <Container>
        <div className="flex flex-col items-center">
          <IconContainer classes="mb-4">
            <IconArticle />
          </IconContainer>

          <Heading classes="leading-[70px]" level={2}>
            مجله و مقالات گیلمار؛ روایت سفر، طبیعت و آرامش
          </Heading>

          <Typography classes="mb-10">
            در مجله گیلمار، خواندنی‌هایی درباره سفر، طبیعت، فرهنگ محلی و تجربه
            اقامتی دلنشین را دنبال کنید.
          </Typography>

          <div className="grid grid-cols-3 gap-4">
            {blog.map((post) => (
              <div key={post.id} className="relative">
                <Image
                  src={post.image}
                  alt={`تصویر پست ${post.title}`}
                  width={450}
                  height={600}
                  className="rounded-2xl brightness-75"
                />
                <div className="absolute right-0 bottom-0 p-8">
                  <Heading classes="text-sm text-white mb-3" level={3}>
                    {post.title}
                  </Heading>
                  <Typography
                    size={TypographySize.xs}
                    classes="text-white leading-[22px]"
                  >
                    {post.summary}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
