<template>
  <div class="story">
    <div class="left-section">
      <span class="score">266</span>
    </div>
    <div class="right-section">
      <span class="title">What to do if you find a nuclear-powered cardiac pacemaker</span>
      <div class="story-footer">
        <span class="host">osrp.lanl.gov</span>
        <span class="by">by</span>
        <span class="author">bookofjoe</span>
        <span>|</span>
        <span class="comments">20 comments</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
    .story {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      border-bottom: 1px solid #eee;

      padding: 20px 30px 20px 30px;
      .left-section {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        padding-right: 20px;
        .score {
          font-size: 17px;
          font-weight: 400;
          color: #2e495e;
        }
      }
      .right-section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 670px;
        .title {
          font-size: 15px;
          font-weight: 400;
          color: #2e495e;
        }
        .story-footer {
          color: #595959;
          font-size: 12px;
          .host,
          .by {
            margin-right: 4px;
          }
          .author {
            font-weight: 300;
            margin-right: 5px;
          }
          .comments {
            text-decoration: underline;
            font-weight: 300;
            margin-left: 5px;
          }
        }
      }
    }
</style>
