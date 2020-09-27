<template>
  <div id="app">
    <div class="comment-input">
      <textarea maxlength="200" cols="3" v-model="commentText">
      </textarea>
      <button @click="addComment()">add comment</button>
    </div>
    <div>
      <comment
        :commentList="commentList" :user = "user"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      commentText: "",
      user: "Chan",
      commentList: [
        {
          text: '我是一个一级评论',
          owner: '路人甲',
          rely: [
            
          ],
          Relyshow: false,
          Relying: false,
        },
        {
          text: '我是一个一级评论',
          owner: '路人甲',
          rely: [
            {
              text: '我是一个一级评论的一级回复',
              owner: '路人丙',
              askeder: '路人甲',
              rely: [],
              Relyshow: false,
              Relying: false,
            },
            {
              text: '我是一个一级评论的一级回复',
              owner: '路人丙',
              askeder: '路人甲',
              rely: [],
              Relyshow: false,
              Relying: false,
            },            {
              text: '我是一个一级评论的一级回复',
              owner: '路人丁',
              askeder: '路人甲',
              rely: [],
              Relyshow: false,
              Relying: false,
            }
          ],
          Relyshow: false,
          Relying: false,
        },
      ]
    }
  },
  methods: {
    addComment() {
      if(this.commentText) {
        this.commentList.push({
          text: this.commentText,
          owner: this.user,
          rely: [],
          Relyshow: false,
          Relying: false,
        })
        this.commentText = ""
      }
    }
  },
}
</script>

<style lang="less">
#app {
  .comment-input {
    textarea {
      width: 800px;
      height: 300px;
      border: 1px solid black;
      word-wrap:break-word;
    }
    button {
      display: block;
      border-radius: 5px;
      border: 1px solid #555; /* no */
    }
  }

}
</style>
