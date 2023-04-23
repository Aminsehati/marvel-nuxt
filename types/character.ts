export class Thumbnail {
    extension!: string
    path!: string
}
export class Item {
    name!: string
    resourceURI!: string
    type!: string
}
export class Story {
    available!: number
    collectionURI!: string
    returned!: number
    items!: Item[]
}
export class Serial {
    available!: number
    collectionURI!: string
    returned!: number
    items!: Item[]
}
export class Event {
    available!: number
    collectionURI!: string
    returned!: number
    items!: Item[]
}
export class Comic {
    available!: number
    collectionURI!: string
    returned!: number
    items!: Item[]
}
export class Character {
    thumbnail!: Thumbnail
    description!: string
    id!: number
    name!: string
    resourceURI!: string
    stories!: Story
    series!: Serial
    events!: Event
    comics!: Comic
}