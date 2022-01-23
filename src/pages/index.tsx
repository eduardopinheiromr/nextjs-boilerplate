import PageLayout from "@components/layouts/PageLayout";
import PageTags from "@components/PageTags";

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
