/**
 * These creeps just load energy at spawn and use it to upgrade controller.
 *
 * @param creep
 */
var upgrader = {
    parts: [
        [Game.WORK, Game.CARRY, Game.CARRY, Game.MOVE]
    ],

    action: function (creep) {
        if(creep.carry.energy != 0) {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        } else {
            var spawns = creep.room.find(FIND_STRUCTURES, {
                        filter: (structure) => {
                        return (structure.structureType == STRUCTURE_SPAWN) && structure.energy > 0}});
            if(creep.withdraw(spawns[0], RESOURCE_ENERGY, creep.carryCapacity) == ERR_NOT_IN_RANGE) {
                creep.moveTo(spawns[0]);
            }
        }
    }
};

module.exports = upgrader;