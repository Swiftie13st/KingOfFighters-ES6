let AC_GAME_OBJECTS = [];

class AcGameObject {
    constructor() {
        AC_GAME_OBJECTS.push(this);
        this.timedelta = 0;
        this.has_call_start = false;
    }

    start() { //初始执行一次

    }

    update() { //每帧执行一次(除第一帧之外)

    }

    destroy() { //删除当前对象sS
        for (let i in AC_GAME_OBJECTS) {
            if (AC_GAME_OBJECTS[i] == this) {
                AC_GAME_OBJECTS.splice(i, 1);
                break;
            }
        }
    }
}

let last_timestmp;
let AC_GAME_OBJECTS_FRAME = (timestmp) => {
    for (let obj of AC_GAME_OBJECTS) {
        if (!obj.has_call_start) {
            obj.start();
            obj.has_call_start = true;
        } else {
            obj.timedelta = timestmp - last_timestmp;
            obj.update();
        }
    }

    last_timestmp = timestmp;
    requestAnimationFrame(AC_GAME_OBJECTS_FRAME);
}
requestAnimationFrame(AC_GAME_OBJECTS_FRAME);

export{
    AcGameObject
}
