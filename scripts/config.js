Hooks.once('init', async function() {
    game.settings.register(AECONSTS.MN, "companions", {
        name: "",
        hint: "",
        scope: "user",
        config: false,
        type: Array,
        default: [],
      });


      AECONSTS.animations = {
          "fire": "Fire",
          "air": "Air",
          "lightning": "Lightning",
          "water": "Water",
      }
});

Hooks.once('ready', async function() {
new CompanionManager().render(true)
});

Hooks.on("rendersheet",(app,html)=>{
    const button = `<a class="open-cm"><i class="fas fa-users"></i>${game.i18n.localize("AE.actorSheetBtn")}</a>`
    html.find(".window-title").after(button)
});
 

Hooks.on("getActorSheetHeaderButtons",(app,buttons)=>{
    buttons.unshift({
        icon: "fas fa-users",
        class: "open-cm",
        label: game.i18n.localize("AE.actorSheetBtn"),
        onclick: () => {
            new CompanionManager().render(true)
        }
    })
});