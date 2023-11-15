# zce.me

> TODO: !!!

- [ ] Image fade in & avatar lazy load

## Route Groups

- `(auth)`
- `(contents)`
- `(dashboard)`
- `(marketing)`
- `(taxonomies)`

https://blog.wittoy.com/archives/vercel-timezone/
https://github.com/dc7290/next-export-optimize-images
https://codesandbox.io/s/reactjs-onerror-forked-3ctrzr?file=/src/App.js:0-48

## API Endpoints

### Authentication

```rest
GET {{api_base}}/authors HTTP/1.1
authorization: basic user:pass
```

### GET `/authors`

[view source](api/authors/index.ts)

```rest
GET {{api_base}}/authors
    ?foo=bar
    &limit=10
    &offset=0
    &sort=name
    &order=asc
    &fields=email,avatar,cover,bio,website,location,socials,meta,count
    &include=count.posts,count.courses

# => Author[]
```

### GET `/authors/{slug}`

[view source](api/authors/[slug].ts)

```rest
GET {{api_base}}/authors/zce
    ?foo=bar
    &fields=email,avatar,cover,bio,website,location,socials,meta,count
    &include=count.posts,count.courses

# => Author
```

### GET `/categories`

[view source](api/categories/index.ts)

```rest
GET {{api_base}}/categories
    ?foo=bar
    &limit=10
    &offset=0
    &sort=name
    &order=asc
    &fields=cover,description,meta,count
    &include=count.posts,count.courses

# => Category[]
```

### GET `/categories/{slug}`

[view source](api/categories/[slug].ts)

```rest
GET {{api_base}}/categories/tutorial
    ?foo=bar
    &fields=cover,description,meta,count
    &include=count.posts,count.courses

# => Category
```

### GET `/tags`

[view source](api/tags/index.ts)

```rest
GET {{api_base}}/tags
    ?foo=bar
    &limit=10
    &offset=0
    &sort=name
    &order=asc
    &fields=cover,description,meta,count
    &include=count.posts,count.courses

# => Tag[]
```

### GET `/tags/{slug}`

[view source](api/tags/[slug].ts)

```rest
GET {{api_base}}/tags/engineering
    ?foo=bar
    &fields=cover,description,meta,count
    &include=count.posts,count.courses

# => Tag
```

### GET `/pages`

[view source](api/pages/index.ts)

```rest
GET {{api_base}}/pages
    ?foo=bar
    &limit=10
    &offset=0
    &sort=title
    &order=asc
    &fields=date,cover,video,description,comment,meta,raw,html

# => Tag[]
```

### GET `/pages/{slug}`

[view source](api/pages/[slug].ts)

```rest
GET {{api_base}}/pages/about
    ?foo=bar
    &fields=date,cover,video,description,comment,meta,raw,html

# => Tag
```

### GET `/posts`

[view source](api/posts/index.ts)

```rest
GET {{api_base}}/posts
    ?foo=bar
    &limit=10
    &offset=0
    &sort=updated
    &order=desc
    &fields=date,updated,cover,video,audio,description,featured,comment,meta,excerpt,raw,html
    &include=authors,categories,tags
    &author=汪磊
    &category=教程
    &tag=模块化

# => Tag[]
```

### GET `/posts/{slug}`

[view source](api/posts/[slug].ts)

```rest
GET {{api_base}}/posts/hello-world
    ?foo=bar
    &fields=date,updated,cover,video,audio,description,featured,comment,meta,excerpt,raw,html
    &include=authors,categories,tags

# => Tag
```

### GET `/courses`

[view source](api/courses/index.ts)

```rest
GET {{api_base}}/courses
    ?foo=bar
    &limit=10
    &offset=0
    &sort=name
    &order=asc
    &fields=date,updated,cover,description,featured,comment,sections,meta,excerpt,raw,html
    &include=authors,categories,tags
    &author=汪磊
    &category=指南
    &tag=模块化

# => Tag[]
```

### GET `/courses/{slug}`

[view source](api/courses/[slug].ts)

```rest
GET {{api_base}}/courses/engineering-summary
    ?foo=bar
    &fields=date,updated,cover,description,featured,comment,sections,meta,excerpt,raw,html
    &include=authors,categories,tags

# => Tag
```

---

```rest
@api_base = https://zce:password@api.zce.me/v1
```
