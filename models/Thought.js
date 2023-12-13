const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String
            //btwn 1 and 280 chars
        },
        createdAt: {
            type: Date,
            default: Date.now
            // getter to format timestamp on query
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [Reaction]

    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
      });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;