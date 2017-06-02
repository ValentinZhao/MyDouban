<template>
  <div class="list">
    <template v-if="mold === 'thumbnail'" v-for="item in items">
      <router-link
        class="thumbnail"
        params: { id: item.id }>
        <div class="content">
          <img :src="item.image_hlarge" alt="cover">
          <h3>{{item.title}}</h3>
          <p>{{item.content | subStr}}</p>
        </div>
        <div class="author">
          <span class="name">{{item.category_name}}</span>
          <span class="label" v-if="item_subcategory_name">
            本活动来自栏目 {{item.subcategory_name}}
          </span>
        </div>
      </router-link>
    </template>
    <template v-if="mold === 'basic'">
      <ul class="basic">
        <li v-for="item in items">
          <a href="#">
            <h3>{{item.title}}</h3>
            <div class="info">{{item.comments}}</div>
          </a>
        </li>
      </ul>
    </template>
  </div>
</template>
