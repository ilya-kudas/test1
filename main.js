var harvester = require('harvester');
var builder = require('builder');
var guard = require('guard');
require('spawner');

for(var name in Game.creeps) {
	var creep = Game.creeps[name];

	if(creep.memory.role == 'harvester') {
		harvester(creep);
	}

	if(creep.memory.role == 'builder') {
	    builder(creep);
	}
	
    if(creep.memory.role == 'guard') {
        guard(creep);
    }
}
// github
