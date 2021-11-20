import PageTags from "@components/PageTags";
import { PageLayout } from "@components/layouts";

const pageTagsProps = {
  title: "Page title",
  description: "Page description",
};

export default function Home() {
  return (
    <PageLayout>
      <PageTags {...pageTagsProps} />
    </PageLayout>
  );
}
