<template>
  <div class="loading-empty">
    <div class="activity-empty">
      <svg data-v-107aa4a9 width="66" height="68" viewBox="0 0 66 68" class="icon empty-icon">
        <g data-v-107aa4a9 fill="none" fill-rule="evenodd" transform="translate(4 3)">
          <g data-v-107aa4a9 fill="#F7F7F7">
            <path
              data-v-107aa4a9
              d="M9 10h23.751v3.221H9zM9 16.494h41.083v4.026H9zM9 26.104h23.751v3.221H9zM9 42.208h23.751v3.221H9zM9 33.351h41.083v4.026H9zM9 49.455h41.083v4.026H9z"
            />
          </g>
          <rect
            data-v-107aa4a9
            width="56"
            height="60"
            x="1.139"
            y="1.338"
            stroke="#EBEBEB"
            stroke-width="2"
            rx="6"
          />
        </g>
      </svg>
      <span class="empty-text">暂无数据，快来该分类下写文章 ~</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.activity-empty {
  padding: 20px;
  background-color: #fff;
  border-radius: 0 0 0.2rem 0.2rem;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 400;
  color: #b2bac2;
  margin-bottom: 0.67rem;
  .empty-text {
    margin-top: 10px;
  }
}
</style>
