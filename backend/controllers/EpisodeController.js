const Episode = require('../models/Episode')

const EpisodeController = {
    create: async ( req, res) => {
        const { chapter_id, title, description } = req.body;
         const videoUrl = req.file
            ? `/uploads/${req.file.filename}`
            : "";
        const data = await Episode.create({
            chapter_id, title, videoUrl, description
        })
        return res.status(200).json({
            message: "Episode Created Successfully!",
            data
        })
    },

    delete: async (req, res) => {
        const { id } = req.params;
        const deleteEpisode = await Episode.findByIdAndDelete(id);
         return res.status(200).json({
            message: "Deleted Successfully!",
        })
    },

    EpisodeList: async (req, res) => {
        try {
            const data = await Episode.find().populate("chapter_id", "title") 
            return res.status(200).json({
                data
            })
        } catch (error) {
            return res.status(400).json({
                message : error.message
            })
        }
    }
}

module.exports = EpisodeController