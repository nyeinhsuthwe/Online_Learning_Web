const Course = require('../models/Course')

const CourseController = {
    createCourse: async (req, res) => {
        const { category_id, title, price, description, topics } = req.body
        const thumbnailUrl = req.file
            ? `/uploads/${req.file.filename}`
            : "";

        const courseData = await Course.create({
            category_id,
            title,
            price,
            description,
            topics: typeof topics === "string" ? JSON.parse(topics) : topics,
            thumbnailUrl
        })

        return res.json({
            message: "Course created successfully",
            data: courseData
        })
    },

    getCourse: async (req, res) => {
        try {
            const data = await Course.find()
            return res.status(200).json({
                data
            })
        } catch (error) {
            return res.status(400).json({
                error: error.message
            })
        }
    }
}

module.exports = CourseController