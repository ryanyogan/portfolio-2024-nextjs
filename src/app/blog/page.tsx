import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";

export default function BlogPage() {
  return (
    <Container className="my-20">
      <PageHeader
        title={<>A blog</>}
        subtitle={<>Are you ready for some serious ADHD?</>}
      ></PageHeader>
      <p className="text-xs font-bold text-slate-8000">
        I told you I would do it! Allow me a day or so, I did not like the old
        site...
      </p>
    </Container>
  );
}
