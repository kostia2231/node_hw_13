import Magazine from "../models/Magazine.js";
import Publisher from "../models/Publisher.js";
import Article from "../models/Article.js";
import Tag from "../models/Tag.js";

export default async function data() {
  try {
    const publisher = new Publisher({
      name: "Publisher",
      location: "Somewhere",
    });
    await publisher.save();

    const magazine = new Magazine({
      title: "Magazine",
      issueNumber: 1,
      publisher: publisher._id,
    });
    await magazine.save();

    const tag = new Tag({
      name: "Tag",
    });
    await tag.save();

    const article = new Article({
      title: "Article",
      content: "Lorem",
      tags: [tag._id],
    });
    await article.save();

    console.log(
      `Article: ${article}, Tag: ${tag}, Magazine: ${magazine}, Publisher ${publisher} have been created successfully`
    );
  } catch (err) {
    console.error(`error occurred while creating data: ${err.message}`);
  }
}
