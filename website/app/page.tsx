import Home from "./home";
import { getExperiences, getTags } from "./sanity/sanity.query";

export default async function Page() {
  const expSanity = await getExperiences();
  const allTags = await getTags();
  console.log("PAGE:", JSON.stringify(expSanity));

  return (
    <Home
      experiences={expSanity}
      allTags={allTags}
    />
  );
}
