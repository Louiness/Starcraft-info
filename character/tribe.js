class Tribe {
    constructor (tribeName, imageUrl, title, content, status) {
        this.tribeName = tribeName;
        this.imgElem = new Image();
        this.imgElem.src = imageUrl;
        this.title = title;
        this.content = content;
        this.status = status;
    }
}

function createTribe() {
    const tribes = [];
    let status = createStatus(4, 2, 4, 3, 5);
    tribes.push(new Tribe('zerg', 'hydralisk.jpg', 'Hydralisk', '기다란 뱀을 닮은 히드라리스크의 외피에는 수백 개의 가시뼈가 돋아 있다. 히드라리스크는 공중이나 육상으로 접근하는 적을 향해 이 가시뼈를 발사할 수 있다. 따라서 히드라리스크가 몰려있는 곳에는 매우 신중하게 접근할 필요가 있다.', status));

    return tribes;
}

function createStatus(leadership, defense, damage, speed, range) {
    return {
        leadership: leadership,
        defense: defense,
        damage: damage,
        speed: speed,
        range: range
    }
}