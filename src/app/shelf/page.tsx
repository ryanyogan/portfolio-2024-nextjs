import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";

export default function BlogPage() {
  return (
    <Container className="my-20">
      <PageHeader
        title={<>I&apos;m a bookshelf</>}
        subtitle={<>What&apos;s on your bookshelf?</>}
      ></PageHeader>
      <p className="text-sm font-bold text-slate-700">
        I think this will be in three.js, but I am not sure yet. I am thinking
      </p>
    </Container>
  );
}
