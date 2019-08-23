<template>
  <div class="pin">
    <div class="header-row">
      <div class="account-group">
        <div class="avatar"></div>
        <div class="pin-header-content">
          <div class="user-popover-box">BiuBiuBiuBiu</div>
          <div class="meta-box">
            <div class="position">前端@zs10253xy</div>
            <div class="dot">·</div>
            <div class="time-box">1小时前</div>
          </div>
        </div>
      </div>
      <div class="header-action">
        <button class="follow-button">关注</button>
      </div>
    </div>
    <div class="content-row">
      <div class="content-box">
        <span>想问一下大家 你们配一副眼镜多少钱</span>
      </div>
    </div>
    <div class="image-row"></div>
    <div class="topic-row"></div>
    <div class="action-row"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.pin {
  background-color: #fff;
  border-radius: 0.2rem;
  .header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 2rem 0 20px;
    .account-group {
      display: flex;
      align-items: center;
      .avatar {
        flex: 0 0 auto;
        width: 3.75rem;
        height: 3.75rem;
        border-radius: 50%;
        overflow: hidden;
        background: red;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .pin-header-content {
        margin-left: 1rem;
        .user-popover-box {
          font-size: 1.25rem;
          font-weight: 600;
          color: #2e3135;
        }
        .meta-box {
          display: flex;
          align-items: center;
          margin: 0.3rem 0 0;
          font-size: 13px;
          color: #8a9aa9;
          .position {
            max-width: 24rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .dot {
            margin: 0 0.5em;
          }
          .time-box {
            color: #8a9aa9;
          }
        }
      }
    }
    .header-action {
      display: flex;
      .follow-button {
        margin: 0 0 0 auto;
        padding: 0;
        width: 55px;
        height: 26px;
        font-size: 13px;
        border-color: #6cbd45;
        color: #6cbd45;
        border: 1px solid #37c700;
        background-color: #fff;
        outline: none;
        cursor: pointer;
        border-radius: 2px;
      }
    }
  }
  .content-row {
    position: relative;
    margin: 5px 4rem 5px 6.45rem;
    .content-box {
      font-size: 15px;
      line-height: 1.6;
      white-space: pre-wrap;
      color: #17181a;
    }
  }
}
</style>
