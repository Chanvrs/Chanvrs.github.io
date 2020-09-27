<template>
    <div class="comment">
        <div 
            class="comment-box"
            v-for="(item,index) in commentList" 
            :key="index"
        >
            <span class="comment-box-user">{{item.owner}}:</span>
            <p class="comment-box-text">
                {{item.text}}
            </p>
            <div class="comment-box-buttongroup" v-if="item.rely.length>0">
                <button class="comment-box-buttongroup-showrely" @click="showRely(item)" v-if="!item.Relyshow">查看回复</button>
                <button class="comment-box-buttongroup-hiderely" @click="hideRely(item)" v-else>收起回复</button>
            </div>
            
            <button class="comment-box-rely" @click="Rely(item)">回复</button>
            <div class="comment-box-input" v-show="item.Relying">
                <textarea name="" id="" cols="30" rows="10" v-model="relyText"></textarea>
                <button @click="handleCancel(item)">取消</button>
                <button @click="handleRely(item)">发表回复</button>
            </div>
                <div v-if="item.Relyshow">
                    <commentItem 
                        v-for="(rely,relyindex) in item.rely" 
                        :key="relyindex" 
                        :relyList="rely"
                        :user="user"
                    />
                </div>       
        </div>  
    </div>
    
</template>

<script>
import commentItem from './commentItem'
export default {
    data() {
        return {
            Relyshow: false,
            relyText: ""
        }
    },
    methods: {
        showRely(item) {
            item.Relyshow = true;
        },
        hideRely(item) {
            item.Relyshow = false
        },
        Rely(item) {
            item.Relying = true;
        },
        handleCancel(item) {
            this.relyText = "",
            item.Relying = false;
        },
        handleRely(item) {
            item.rely.push({
                text: this.relyText,
                owner: this.user,
                askeder: item.owner,
                rely: [],
                Relyshow: false,
                Relying: false,
            })
            item.Relying = false;
            item.Relyshow = true;
            this.relyText = "";
        }
    },
    props: {
        commentList: {
            default: [],
            type: Array,
        },
        user: {
            default: "游客",
            type: String,
        }
    },
    components: {
        commentItem
    }
}
</script>

<style lang="less" scoped>
    .comment {
        &-box {
            border: 1px solid #555;
            margin: 20px 0;
            width: 60%;
            &-text {
                display: inline-block;
                margin: 0 20px;
            }
            &-buttongroup {
                display: inline-block;
                &-showrely {
                    border-radius: 5px;
                    border: 1px solid #555; /* no */
                }
                &-hiderely {
                    border-radius: 5px;
                    border: 1px solid #555; /* no */
                }
            }
            
            &-rely {
                border-radius: 5px;
                border: 1px solid #555; /* no */
            }
            &-input {
                textarea {
                    display: block;
                    width: 300px;
                    height: 100px;
                    border: 1px solid black;
                }
                button {
                    border-radius: 5px;
                    border: 1px solid #555;/* no */
                }
            }
        }
    }
    .commentItem-enter-active,.commentItem-leave-active {
        transition: height 1s
    }
    .commentItem-enter, .commentItem-leave-to {
        height: 0;
    }
</style>