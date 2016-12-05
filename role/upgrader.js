/**
 * These creeps just load energy at spawn and use it to upgrade controller.
 *
 * @param creep
 */
var upgrader = {
    parts: [
        [Game.WORK, Game.CARRY, Game.CARRY, Game.MOVE]
    ],

    action: function () {
        if(creep.carry.energy != 0) {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        } else {
            var spawn = creep.room.find(Game.MY_SPAWNS);
            if(creep.withdraw(spawn, RESOURCE_ENERGY, creep.carryCapacity) == ERR_NOT_IN_RANGE) {
                creep.moveTo(spawn);
            }
        }
    }
};

module.exports = roleUpgrader;