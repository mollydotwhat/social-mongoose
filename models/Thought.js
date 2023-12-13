const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            minLength: [1, 'you need at least one character!'],
            maxLength: [280, 'Too long! The maximum is 280 characters.']
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
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