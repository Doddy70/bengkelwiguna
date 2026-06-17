import { BlockBreadcrumb } from "~/components/block-breadcrumb";
import { BlockSection } from "~/components/block-section";
import DefaultCommentsListCommentsSections from "./default";
import CommentsWithSolidBackgroundCommentsSections from "./solid-background";
import CommentsWithUpvoteCommentsSections from "./upvote";
import WordPressCommentsSection from "./wordpress";

export default function AllCommentsSections() {
  return (
    <>
      <BlockBreadcrumb
        title="Comments Sections"
        description="Get started with a collection of comments sections coded with Tailwind CSS to show a list of comments for blog posts with features like a reply, like, and more."
      />
      <BlockSection
        title="Default comments list"
        description="Use this example of a free comments box to show a submission form and a list of comments with the settings and reply feature."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <DefaultCommentsListCommentsSections />
      </BlockSection>
      <BlockSection
        title="Comments with upvote"
        description="This example can be used to allow upvoting or downvoting comments similar to Reddit including the reply feature."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/search-bar-card-links.tsx"
      >
        <CommentsWithUpvoteCommentsSections />
      </BlockSection>
      <BlockSection
        title="Comments with solid background"
        description="Use this example to show a list of comments with a submission for and with the possibility to reply to any of the comments."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/illustration-links.tsx"
      >
        <CommentsWithSolidBackgroundCommentsSections />
      </BlockSection>
      <BlockSection
        title="WordPress comments"
        description="Use this example to show a list of comments and form submissions similar to the default comments section from WordPress."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/404-pages/default.tsx"
      >
        <WordPressCommentsSection />
      </BlockSection>
    </>
  );
}
