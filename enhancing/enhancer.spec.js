const enhancer = require('./enhancer.js');
const player = {
    name: "johndoe",
    durability: 50,
    enhancement: 5,
}

const player_at_15 = {
    name: "at 15 enhance",
    durability: 50,
    enhancement: 15
}

const player_at_17 = {
    name: "at 17 enhance",
    durability: 50,
    enhancement: 17
}


describe("enhancement tests" ,() => {
    it("repairs the item, replenishing durability", () => {
        expect(enhancer.repair(player)).toEqual({
            ...player,
            durability: 100
        })
    })

    it("peforms a success", () => {
        expect(enhancer.success(player)).toEqual({
            ...player,
            enhancement: player.enhancement + 1
        })
    })

    it("performs an action", () => {
        expect(enhancer.fail(player)).toEqual({
            ...player,
            durability: player.durability - 5
        })
        expect(enhancer.fail(player_at_15)).toEqual({
            ...player_at_15,
            durability: 40,
        
        })        
        expect(enhancer.fail(player_at_17)).toEqual({
            ...player_at_17,
            durability: 40,
            enhancement: 16
        })

    })

})
