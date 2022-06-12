const express = require("express");
const router = express();
const { post: PostController } = require("../controllers");
const postController = new PostController();

router.route("/").get(postController.getList).post(postController.create);

router
  .route("/:id")
  .get(postController.getOne)
  .patch(postController.update)
  .delete(postController.delete);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Posts
 */

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Get list
 *     description: Get list of posts.
 *     tags: [Posts]
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   creator:
 *                     type: string
 *                   title:
 *                     type: string
 *                   link:
 *                     type: string
 *                   pubDate:
 *                     type: string
 *                   content:
 *                     type: string
 *                   contentSnippet:
 *                     type: string
 *                   guid:
 *                     type: string
 *                   categories:
 *                     type: array
 *                     items:
 *                       type: string
 *       "404":
 *         description: Posts not found
 *   post:
 *     summary: Add new post
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - category
 *             properties:
 *                   creator:
 *                     type: string
 *                   title:
 *                     type: string
 *                   link:
 *                     type: string
 *                   pubDate:
 *                     type: string
 *                   content:
 *                     type: string
 *                   contentSnippet:
 *                     type: string
 *                   guid:
 *                     type: string
 *                   categories:
 *                     type: array
 *                     items:
 *                       type: string
 *     responses:
 *       "201":
 *         description: OK
 *       "400":
 *         description: Invalid input
 */

/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     summary: Get one post
 *     description: Get one post by id.
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id must be a valid MongoDB ObjectId.
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                   _id:
 *                     type: string
 *                   creator:
 *                     type: string
 *                   title:
 *                     type: string
 *                   link:
 *                     type: string
 *                   pubDate:
 *                     type: string
 *                   content:
 *                     type: string
 *                   contentSnippet:
 *                     type: string
 *                   guid:
 *                     type: string
 *                   categories:
 *                     type: array
 *                     items:
 *                       type: string
 *       "400":
 *         description: Invalid input
 *       "404":
 *         description: Posts not found
 *   patch:
 *     summary: Update post
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id must be a valid MongoDB ObjectId.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - category
 *             properties:
 *                   creator:
 *                     type: string
 *                   title:
 *                     type: string
 *                   link:
 *                     type: string
 *                   pubDate:
 *                     type: string
 *                   content:
 *                     type: string
 *                   contentSnippet:
 *                     type: string
 *                   guid:
 *                     type: string
 *                   categories:
 *                     type: array
 *                     items:
 *                       type: string
 *     responses:
 *       "200":
 *         description: OK
 *       "400":
 *         description: Invalid input
 *       "404":
 *         description: Posts not found
 *   delete:
 *     summary: Delete post
 *     description: Delete post by id.
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id must be a valid MongoDB ObjectId.
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: Ok
 *       "400":
 *         description: Invalid input
 *       "404":
 *         description: Posts not found
 */
