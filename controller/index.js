import { executeQuery, executeAddQuery } from "../config";

const getAllHomeData = async (req, res) => {
  try {
    let HomeList = [];
    let interview_brief_description_slider = await executeQuery(
      `SELECT record_id,img_video,type,heading,title,description,
            DATE_FORMAT(interview_date,"%M %d") as article_date,
            DATE_FORMAT(interview_date,"%Y") as article_year,
            sort_order,posted_by
        FROM interview_brief_description_slider`,
      []
    );
    let honorable_details_list = await executeQuery(
      `SELECT record_id,img_video,type,title,description,posted_by,
            DATE_FORMAT(article_date,"%M %d") as article_date,
            DATE_FORMAT(article_date,"%Y") as article_year,sort_order
       FROM honorable_details_list  order by sort_order desc`,
      []
    );

    let honorableslider = await executeQuery(
      `SELECT record_id,img_video,type,
            title,heading,description,posted_by,
            DATE_FORMAT(article_date,"%M %d") as article_date,
            DATE_FORMAT(article_date,"%Y") as article_year,
            sort_order 
        FROM honorableslider order by sort_order desc`,
      []
    );

    let special_report = await executeQuery(
      `SELECT record_id,img_video,type,
        title,description,posted_by,
        DATE_FORMAT(report_date,"%M %d") as article_date,
        DATE_FORMAT(report_date,"%Y") as article_year,
        sort_order 
        FROM special_report`,
      []
    );

    let special_edition = await executeQuery(
      `SELECT record_id,img_video,type, title,  description,
        posted_by,sort_order, DATE_FORMAT(edition_date,"%M %d") as article_date,
        DATE_FORMAT(edition_date,"%Y") as article_year 
         FROM special_edition where edition_type=1`,
      []
    );

    let special_edition1 = await executeQuery(
      `SELECT record_id,img_video,type, title,  description,
         posted_by,sort_order, DATE_FORMAT(edition_date,"%M %d") as article_date,
        DATE_FORMAT(edition_date,"%Y") as article_year 
        FROM special_edition where edition_type=2`,
      []
    );

    let video_gallery = await executeQuery(`SELECT * FROM video_gallery`, []);

    let video_gallerylist = await executeQuery(
      `SELECT * FROM video_gallerylist`,
      []
    );

    let image_gallery = await executeQuery(`SELECT * FROM image_gallery`, []);

    HomeList.push(interview_brief_description_slider);
    HomeList.push(honorable_details_list);
    HomeList.push(honorableslider);
    HomeList.push(special_report);
    HomeList.push(special_edition);
    HomeList.push(special_edition1);
    HomeList.push(video_gallery);
    HomeList.push(video_gallerylist);
    HomeList.push(image_gallery);

    res.send({ HomeList });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getDetailById = async (req, res) => {
  let id = req.query.id;
  let detail_type = req.query.detail_type;

  try {
    let sql,
      AllDetailsData = [];
    if (detail_type === "detail_list") {
      sql = await executeQuery(
        `SELECT img_video,type,title,description,posted_by,
                DATE_FORMAT(article_date,"%M %d") as article_date,
                DATE_FORMAT(article_date,"%Y") as article_year,
                sort_order
            FROM honorable_details_list
            where record_id=?`,
        [id]
      );
    } else if (detail_type === "special_edition1") {
      sql = await executeQuery(
        `SELECT record_id,img_video,type, title, description,posted_by,
                      DATE_FORMAT(edition_date,"%M %d") as article_date,
                      DATE_FORMAT(edition_date,"%Y") as article_year,  sort_order
              FROM special_edition 
              WHERE record_id=? and edition_type=1`,
        [id]
      );
    } else if (detail_type === "special_edition2") {
      sql = await executeQuery(
        `SELECT record_id,img_video,type, title,  description,posted_by,
                      sort_order, DATE_FORMAT(edition_date,"%M %d") as article_date,
                      DATE_FORMAT(edition_date,"%Y") as article_year
               FROM special_edition
               WHERE record_id=? and edition_type=2`,
        [id]
      );
    } else if (detail_type === "special_report") {
      sql = await executeQuery(
        `SELECT record_id,img_video,type, title, description,posted_by,
                      DATE_FORMAT(report_date,"%M %d") as article_date,
                      DATE_FORMAT(report_date,"%Y") as article_year , sort_order
               FROM special_report
               WHERE record_id=?`,
        [id]
      );
    } else if (detail_type === "image_gallery") {
      sql = await executeQuery(
        `SELECT record_id,img_video,type, title, description, sort_order, 
                      DATE_FORMAT(posted_date,"%M %d") as article_date,
                      DATE_FORMAT(posted_date,"%Y") as article_year ,posted_by
               FROM image_gallery where record_id=?`,
        [id]
      );
    } else if (detail_type === "video_gallery") {
      sql = await executeQuery(
        `SELECT record_id, description, img_video,type,
                       title,  sort_order ,
                       DATE_FORMAT(posted_date,"%M %d") as article_date,
                       DATE_FORMAT(posted_date,"%Y") as article_year ,posted_by
               FROM video_gallery where record_id=?`,
        [id]
      );
    } else if (detail_type === "honorable_detail") {
      sql = await executeQuery(
        `SELECT  record_id,img_video,type, title, heading, description, 
                       posted_by, sort_order, 
                       DATE_FORMAT(article_date,"%M %d") as article_date,
                       DATE_FORMAT(article_date,"%Y") as article_year 
               FROM honorableslider WHERE record_id=?`,
        [id]
      );
    } else if (detail_type === "honorable_video") {
      sql = await executeQuery(
        `SELECT record_id,img_video,type, 
                      title, heading, description, posted_by, 
                      DATE_FORMAT(article_date,"%M %d")as article_date,
                        DATE_FORMAT(article_date,"%Y") as article_year, 
                      sort_order
               FROM honorableslider WHERE record_id=?`,
        [id]
      );
    } else if (detail_type === "video_gallery1") {
      sql = await executeQuery(
        `SELECT record_id,img_video,type, title, description, sort_order, posted_by,
                      DATE_FORMAT(article_date,"%M %d")as article_date,
                      DATE_FORMAT(article_date,"%Y") as article_year
               FROM video_gallerylist WHERE record_id=?`,
        [id]
      );
    } else if (detail_type === "interview_description") {
      sql = await executeQuery(
        `  SELECT record_id,img_video,type, heading, 
                        title, description,DATE_FORMAT(interview_date,"%M %d")as article_date,
                        DATE_FORMAT(interview_date,"%Y") as article_year, 
                        sort_order, posted_by
                        FROM interview_brief_description_slider WHERE record_id=?`,
        [id]
      );
    } else if (detail_type === "news_report") {
      sql = await executeQuery(
        `SELECT  record_id, img_video,type, DATE_FORMAT(news_date,"%M %d") as article_date,
                      DATE_FORMAT(news_date,"%Y") as article_year, title, description, sort_order,posted_by
                      FROM news_report_list WHERE record_id=?`,
        [id]
      );
    } else if (detail_type === "related_post") {
      sql = await executeQuery(
        `SELECT record_id, img_video,type,
                      DATE_FORMAT(post_date,"%M %d") as article_date, 
                      DATE_FORMAT(post_date,"%Y") as article_year, title,description,posted_by
                      FROM related_post WHERE record_id=?`,
        [id]
      );
    } else if (detail_type === "listing_page") {
      sql = await executeQuery(
        `SELECT record_id, img_video,type,
                      DATE_FORMAT(report_date,"%M %d") as article_date,
                      DATE_FORMAT(report_date,"%Y") as article_year, 
                      title, description, sort_order,posted_by
              FROM special_report WHERE record_id=?`,
        [id]
      );
    }
    let sql1 = await executeQuery(
      `SELECT record_id, img_video,type, 
    DATE_FORMAT(post_date,"%M %d") as article_date, 
    DATE_FORMAT(post_date,"%Y") as article_year, 
    title,description,posted_by 
    FROM related_post`,
      []
    );

    let sql2 = await executeQuery(
      `SELECT  record_id,img_video,type,  DATE_FORMAT(news_date,"%M %d") as article_date,
    DATE_FORMAT(news_date,"%Y") as article_year, title, description, sort_order,posted_by
     FROM news_report_list`,
      []
    );

    AllDetailsData.push(sql);
    AllDetailsData.push(sql1);
    AllDetailsData.push(sql2);
    res.status(200).json(AllDetailsData);
  } catch (err) {
    res.status(500).json(err);
  }
};
const getListing = async (req, res) => {
  let listing_type = req.query.type;
  try {
    let ListingType = [],
      sql;

    if (listing_type === "special_edition1") {
      sql = await executeQuery(
        `SELECT record_id,img_video,type, title, description,posted_by,
        DATE_FORMAT(edition_date,"%M %d") as article_date,
        DATE_FORMAT(edition_date,"%Y") as article_year,  sort_order
  FROM special_edition 
  WHERE edition_type=1`,
        []
      );
    } else if (listing_type === "special_edition2") {
      sql = await executeQuery(
        `SELECT record_id,img_video,type, title,  description,posted_by,
                    sort_order, DATE_FORMAT(edition_date,"%M %d") as article_date,
                    DATE_FORMAT(edition_date,"%Y") as article_year
             FROM special_edition
             WHERE edition_type=2`,
        []
      );
    } else if (listing_type === "special_report") {
      sql = await executeQuery(
        `SELECT record_id,img_video,type, title, description,posted_by,
                    DATE_FORMAT(report_date,"%M %d") as article_date,
                    DATE_FORMAT(report_date,"%Y") as article_year , sort_order
             FROM special_report
            `,
        []
      );
    } else if (listing_type === "honorable_video") {
      sql = await executeQuery(
        `SELECT record_id,img_video,type, 
                    title, heading, description, posted_by, 
                    DATE_FORMAT(article_date,"%M %d")as article_date,
                      DATE_FORMAT(article_date,"%Y") as article_year, 
                    sort_order
             FROM honorableslider`,
        []
      );
    }
    let sql1 = await executeQuery(
      `SELECT  record_id,img_video,type,  DATE_FORMAT(news_date,"%M %d") as article_date,
    DATE_FORMAT(news_date,"%Y") as article_year, title, description, sort_order,posted_by
     FROM news_report_list`,
      []
    );
    ListingType.push(sql);
    ListingType.push(sql1);
    res.send({ ListingType });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAbout = async (req, res) => {
  try {
    let About = await executeQuery(`SELECT * FROM aboutus`, []);

    res.send({ About });
  } catch (err) {
    res.status(500).json(err);
  }
};

const SaveContactDetail = async (req, res) => {
  let name = req.body.values.name;
  let contact_number = req.body.values.contact_number;
  let email_id = req.body.values.email_id;
  let subject = req.body.values.subject;
  let message = req.body.values.message;

  try {
    let employeedata = await executeAddQuery(
      `INSERT INTO contactus( 
        name,
        contact_number,
        email_id,
        subject,
        message
        ) 
values(?,?,?,?,?)`,
      [name, contact_number, email_id, subject, message]
    );
    console.log(employeedata);
    res.status(200).json(employeedata);
  } catch (err) {
    res.status(500).json(err);
  }
};

export {
  getAllHomeData,
  getDetailById,
  SaveContactDetail,
  getListing,
  getAbout,
};
