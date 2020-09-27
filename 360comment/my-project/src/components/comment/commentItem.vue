<template>
    <div class="rely">
        <div class="rely-box">
            <span class="rely-box-user">{{relyList.owner}}</span>
            <span>回复</span>
            <span class="rely-box-user">{{relyList.askeder}}</span>
            <span>:</span>
            <p class="rely-box-text">
                {{relyList.text}}
            </p>
            <div class="rely-box-buttongroup" v-if="relyList.rely.length>0">
                <button class="rely-box-buttongroup-button" @click="showRely()" v-if="!relyList.Relyshow">查看回复</button>
                <button class="rely-box-buttongroup-button" @click="hideRely()" v-else>收起回复</button>
            </div>
            <button class="rely-box-button" @click="Rely()">回复</button>
            <div class="rely-box-input" v-show="relyList.Relying">
                <textarea name="" id="" cols="30" rows="10" v-model="relyText"></textarea>
                <button @click="handleCancel()">取消</button>
                <button @click="handleRely()">发表回复</button>
            </div>
            <div class="rely-list" v-if="relyList.Relyshow&&relyList.rely.length>0">
                <div v-for="(item,index) in relyList.rely" :key="index">
                    <commentItem
                        :relyList="item"
                        :user="user"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        relyList: {
            default: {},
            type: Object,
        },
        user: {
            default: "游客",
            type: String,
        }
    },
    data() {
        return {
            relyText: "",
        }
    },
    methods: {
        showRely() {
            this.relyList.Relyshow = true;
        },
        hideRely() {
            this.relyList.Relyshow = false;
        },
        Rely() {
            this.relyList.Relying = true;
        },
        handleCancel() {
            this.relyText = "";
            this.relyList.Relying = false;
        },
        handleRely() {
            this.relyList.rely.push({
                text: this.relyText,
                owner: this.user,
                askeder: this.relyList.owner,
                rely: [],
                Relyshow: false,
                Relying: false,
            })
            this.relyText = "";
            this.relyList.Relyshow = true;
            this.relyList.Relying = false;
        }
    }
}
</script>

<style lang="less" scoped>
    .rely {
        margin-left: 10px;
        padding-left: 10px;
        border-left: 1px solid #555; /* no */
        &-box {
            &-user {

            }
            &-text {
                display: inline-block;
            }
            &-buttongroup {
                display: inline-block;
                &-button {
                    border-radius: 5px;
                    border: 1px solid #555; /* no */
                }
            }
            &-button {
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
</style>