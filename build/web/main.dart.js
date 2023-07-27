// Generated by DDC, the Dart Development Compiler (to JavaScript).
// Version: 2.19.2 (stable) (Tue Feb 7 18:37:17 2023 +0000) on "linux_x64"
// Module: zapp_user_main
// Flags: soundNullSafety(true), enableAsserts(true)
define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const binding = flutter_sdk.src__widgets__binding;
  const app = flutter_sdk.src__material__app;
  const theme_data = flutter_sdk.src__material__theme_data;
  const color_scheme = flutter_sdk.src__material__color_scheme;
  const framework = flutter_sdk.src__widgets__framework;
  const scaffold = flutter_sdk.src__material__scaffold;
  const container = flutter_sdk.src__widgets__container;
  const edge_insets = flutter_sdk.src__painting__edge_insets;
  const basic = flutter_sdk.src__widgets__basic;
  const flex = flutter_sdk.src__rendering__flex;
  const icon = flutter_sdk.src__widgets__icon;
  const icons = flutter_sdk.src__material__icons;
  const text = flutter_sdk.src__widgets__text;
  const text_style = flutter_sdk.src__painting__text_style;
  const spacer = flutter_sdk.src__widgets__spacer;
  const text_field = flutter_sdk.src__material__text_field;
  const input_decorator = flutter_sdk.src__material__input_decorator;
  const filled_button = flutter_sdk.src__material__filled_button;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var web_plugin_registrant = Object.create(dart.library);
  var app$ = Object.create(dart.library);
  var login_page = Object.create(dart.library);
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278290310
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281794739
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4289724448
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278442694
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294922508
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: ui.Brightness.prototype,
        [_Enum__name]: "light",
        [_Enum_index]: 1
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: color_scheme.ColorScheme.prototype,
        [ColorScheme__secondaryVariant]: C[2] || CT.C2,
        [ColorScheme__primaryVariant]: C[3] || CT.C3,
        [ColorScheme__surfaceTint]: null,
        [ColorScheme__inversePrimary]: null,
        [ColorScheme__onInverseSurface]: null,
        [ColorScheme__inverseSurface]: null,
        [ColorScheme__scrim]: null,
        [ColorScheme__shadow]: null,
        [ColorScheme__outlineVariant]: null,
        [ColorScheme__outline]: null,
        [ColorScheme__onSurfaceVariant]: null,
        [ColorScheme__surfaceVariant]: null,
        [ColorScheme_onSurface]: C[4] || CT.C4,
        [ColorScheme_surface]: C[5] || CT.C5,
        [ColorScheme_onBackground]: C[4] || CT.C4,
        [ColorScheme_background]: C[5] || CT.C5,
        [ColorScheme__onErrorContainer]: null,
        [ColorScheme__errorContainer]: null,
        [ColorScheme_onError]: C[5] || CT.C5,
        [ColorScheme_error]: C[6] || CT.C6,
        [ColorScheme__onTertiaryContainer]: null,
        [ColorScheme__tertiaryContainer]: null,
        [ColorScheme__onTertiary]: null,
        [ColorScheme__tertiary]: null,
        [ColorScheme__onSecondaryContainer]: null,
        [ColorScheme__secondaryContainer]: null,
        [ColorScheme_onSecondary]: C[4] || CT.C4,
        [ColorScheme_secondary]: C[7] || CT.C7,
        [ColorScheme__onPrimaryContainer]: null,
        [ColorScheme__primaryContainer]: null,
        [ColorScheme_onPrimary]: C[5] || CT.C5,
        [ColorScheme_primary]: C[8] || CT.C8,
        [ColorScheme_brightness]: C[9] || CT.C9
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: login_page.APage.prototype,
        [Widget_key]: null
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 32,
        [EdgeInsets_right]: 32,
        [EdgeInsets_top]: 32,
        [EdgeInsets_left]: 32
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: spacer.Spacer.prototype,
        [Widget_key]: null,
        [Spacer_flex]: 1
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Sign Up"
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: spacer.Spacer.prototype,
        [Widget_key]: null,
        [Spacer_flex]: 20
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Log in"
      });
    }
  }, false);
  var C = Array(16).fill(void 0);
  var I = [
    "package:flutter_app/src/app.dart",
    "package:flutter_app/src/presentation/pages/login_page.dart"
  ];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
      if (js.context.hasProperty("__notifyFlutterRendered")) {
        async.Future.delayed(new core.Duration.new({milliseconds: 250})).then(core.Null, dart.fn(_ => {
          js.context.callMethod("__notifyFlutterRendered", [false]);
        }, T.dynamicToNull()));
      }
    }, T.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T.VoidToNull()), registerPlugins: dart.fn(() => {
          web_plugin_registrant.registerPlugins();
        }, T.VoidToNull())});
    });
  };
  main.main = function main$0() {
    binding.runApp(new app$.App.new());
  };
  web_plugin_registrant.registerPlugins = function registerPlugins() {
  };
  var Color_value = dart.privateName(ui, "Color.value");
  var ColorScheme__secondaryVariant = dart.privateName(color_scheme, "ColorScheme._secondaryVariant");
  var ColorScheme__primaryVariant = dart.privateName(color_scheme, "ColorScheme._primaryVariant");
  var ColorScheme__surfaceTint = dart.privateName(color_scheme, "ColorScheme._surfaceTint");
  var ColorScheme__inversePrimary = dart.privateName(color_scheme, "ColorScheme._inversePrimary");
  var ColorScheme__onInverseSurface = dart.privateName(color_scheme, "ColorScheme._onInverseSurface");
  var ColorScheme__inverseSurface = dart.privateName(color_scheme, "ColorScheme._inverseSurface");
  var ColorScheme__scrim = dart.privateName(color_scheme, "ColorScheme._scrim");
  var ColorScheme__shadow = dart.privateName(color_scheme, "ColorScheme._shadow");
  var ColorScheme__outlineVariant = dart.privateName(color_scheme, "ColorScheme._outlineVariant");
  var ColorScheme__outline = dart.privateName(color_scheme, "ColorScheme._outline");
  var ColorScheme__onSurfaceVariant = dart.privateName(color_scheme, "ColorScheme._onSurfaceVariant");
  var ColorScheme__surfaceVariant = dart.privateName(color_scheme, "ColorScheme._surfaceVariant");
  var ColorScheme_onSurface = dart.privateName(color_scheme, "ColorScheme.onSurface");
  var ColorScheme_surface = dart.privateName(color_scheme, "ColorScheme.surface");
  var ColorScheme_onBackground = dart.privateName(color_scheme, "ColorScheme.onBackground");
  var ColorScheme_background = dart.privateName(color_scheme, "ColorScheme.background");
  var ColorScheme__onErrorContainer = dart.privateName(color_scheme, "ColorScheme._onErrorContainer");
  var ColorScheme__errorContainer = dart.privateName(color_scheme, "ColorScheme._errorContainer");
  var ColorScheme_onError = dart.privateName(color_scheme, "ColorScheme.onError");
  var ColorScheme_error = dart.privateName(color_scheme, "ColorScheme.error");
  var ColorScheme__onTertiaryContainer = dart.privateName(color_scheme, "ColorScheme._onTertiaryContainer");
  var ColorScheme__tertiaryContainer = dart.privateName(color_scheme, "ColorScheme._tertiaryContainer");
  var ColorScheme__onTertiary = dart.privateName(color_scheme, "ColorScheme._onTertiary");
  var ColorScheme__tertiary = dart.privateName(color_scheme, "ColorScheme._tertiary");
  var ColorScheme__onSecondaryContainer = dart.privateName(color_scheme, "ColorScheme._onSecondaryContainer");
  var ColorScheme__secondaryContainer = dart.privateName(color_scheme, "ColorScheme._secondaryContainer");
  var ColorScheme_onSecondary = dart.privateName(color_scheme, "ColorScheme.onSecondary");
  var ColorScheme_secondary = dart.privateName(color_scheme, "ColorScheme.secondary");
  var ColorScheme__onPrimaryContainer = dart.privateName(color_scheme, "ColorScheme._onPrimaryContainer");
  var ColorScheme__primaryContainer = dart.privateName(color_scheme, "ColorScheme._primaryContainer");
  var ColorScheme_onPrimary = dart.privateName(color_scheme, "ColorScheme.onPrimary");
  var ColorScheme_primary = dart.privateName(color_scheme, "ColorScheme.primary");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var ColorScheme_brightness = dart.privateName(color_scheme, "ColorScheme.brightness");
  var Widget_key = dart.privateName(framework, "Widget.key");
  app$.App = class App extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new app$.App.new({key: key});
    }
    build(context) {
      return new app.MaterialApp.new({title: "Demo", theme: theme_data.ThemeData.new({colorScheme: C[1] || CT.C1}), home: C[10] || CT.C10});
    }
  };
  (app$.App.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    app$.App.__proto__.new.call(this, {key: key});
    ;
  }).prototype = app$.App.prototype;
  dart.addTypeTests(app$.App);
  dart.addTypeCaches(app$.App);
  dart.setMethodSignature(app$.App, () => ({
    __proto__: dart.getMethods(app$.App.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(app$.App, I[0]);
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var Spacer_flex = dart.privateName(spacer, "Spacer.flex");
  var Text_selectionColor = dart.privateName(text, "Text.selectionColor");
  var Text_textHeightBehavior = dart.privateName(text, "Text.textHeightBehavior");
  var Text_textWidthBasis = dart.privateName(text, "Text.textWidthBasis");
  var Text_semanticsLabel = dart.privateName(text, "Text.semanticsLabel");
  var Text_maxLines = dart.privateName(text, "Text.maxLines");
  var Text_textScaleFactor = dart.privateName(text, "Text.textScaleFactor");
  var Text_overflow = dart.privateName(text, "Text.overflow");
  var Text_softWrap = dart.privateName(text, "Text.softWrap");
  var Text_locale = dart.privateName(text, "Text.locale");
  var Text_textDirection = dart.privateName(text, "Text.textDirection");
  var Text_textAlign = dart.privateName(text, "Text.textAlign");
  var Text_strutStyle = dart.privateName(text, "Text.strutStyle");
  var Text_style = dart.privateName(text, "Text.style");
  var Text_textSpan = dart.privateName(text, "Text.textSpan");
  var Text_data = dart.privateName(text, "Text.data");
  login_page.APage = class APage extends framework.StatelessWidget {
    static ['_#new#tearOff']() {
      return new login_page.APage.new();
    }
    build(context) {
      return new scaffold.Scaffold.new({body: new container.Container.new({margin: C[11] || CT.C11, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T.JSArrayOfWidget().of([new basic.Row.new({children: T.JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.chevron_left, {size: 32}), new text.Text.new("Log in", {style: new text_style.TextStyle.new({fontSize: 24})})])}), C[12] || CT.C12, new basic.Center.new({child: new basic.Column.new({children: T.JSArrayOfWidget().of([new text.Text.new("Dash Inside", {style: new text_style.TextStyle.new({fontSize: 32})}), new text.Text.new("Non-Profit Organization", {style: new text_style.TextStyle.new({fontSize: 16})})])})}), C[12] || CT.C12, new basic.Center.new({child: new basic.Column.new({children: T.JSArrayOfWidget().of([new text_field.TextField.new({decoration: new input_decorator.InputDecoration.new({label: new text.Text.new("Email")})}), new text_field.TextField.new({decoration: new input_decorator.InputDecoration.new({label: new text.Text.new("Password")})})])})}), C[12] || CT.C12, new basic.Column.new({children: T.JSArrayOfWidget().of([new basic.SizedBox.new({width: 1 / 0, child: new filled_button.FilledButton.new({onPressed: dart.fn(() => {
                      }, T.VoidTovoid()), child: C[13] || CT.C13})}), C[14] || CT.C14, new basic.SizedBox.new({width: 1 / 0, child: new filled_button.FilledButton.new({onPressed: dart.fn(() => {
                      }, T.VoidTovoid()), child: C[15] || CT.C15})})])})])})})});
    }
  };
  (login_page.APage.new = function() {
    login_page.APage.__proto__.new.call(this);
    ;
  }).prototype = login_page.APage.prototype;
  dart.addTypeTests(login_page.APage);
  dart.addTypeCaches(login_page.APage);
  dart.setMethodSignature(login_page.APage, () => ({
    __proto__: dart.getMethods(login_page.APage.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(login_page.APage, I[1]);
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main,
    "file:///zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart": web_plugin_registrant,
    "package:flutter_app/src/app.dart": app$,
    "package:flutter_app/src/presentation/pages/login_page.dart": login_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart","/zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart","/zapp/project/lib/src/app.dart","/zapp/project/lib/src/presentation/pages/login_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2CI,IA1BF,iCAAgB;AACd,UAAoB,6BAGD;AAF8B,QAA9B,AAAkB,6BAElB,eAF2B;;AAEL,QAAF,CAApB;;AAEnB,UAAO,AAAQ,uBAAY;AAKvB,QAJK,AAAqC,qBAA7B,qCAAuB,uBAAW,QAAC;AAG9C,UAFC,AAAQ,sBAAW,2BAA2B,CAC/C;;;wBAIL,SAAC,GAAG;AACL,UAAO,AAAQ,uBAAY;AAIvB,QAHC,AAAQ,sBAAW,wBAAwB,CAC5C,AAAE,CAAD,eACD,AAAW,UAAD;;2DAGM,yCACb,SAAC,MAAM,QAAQ,MAAM;AAC1B,cAAO,AAAQ,uBAAY;AAC4B,YAAlD,AAAQ,sBAAW,wBAAwB,CAAC,IAAI;;;EAI3D;;AAEiB;AAQd,MAPD,MAAS,gCACC;AACS,UAAf;6CAEe;AACmB,UAAjB;;IAGvB;;;ACnDe,IAAb,eAAO;EACT;;ECEwB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UCCI;AACxB,YAAO,iCAAoB,eAClB;IAQX;;;QAbiB;AAAX,4CAAW,GAAG;;EAAE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UCCI;AACxB,YAAO,kCACC,6DAEG,0CACkC,yCAC7B,wBACR,6BACY,wBACR,kBAAW,iCAAoB,MAC/B,kBACE,kBACO,wCAAoB,6BAKjC,6BACS,gCACK,wBACR,kBACE,uBACO,wCAAoB,QAE7B,kBACE,mCACO,wCAAoB,+BAMnC,6BACS,gCACK,wBACR,0CAAsB,gDAAuB,kBAAK,cAClD,0CAAsB,gDAAuB,kBAAK,wCAMxD,gCACY,wBACZ,6CAES,+CACM;uFAOf,6CAES,+CACM;;IAUzB;;;AAtEM;;EAAO","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main,
    zapp__project__$46dart_tool__dartpad__web_plugin_registrant: web_plugin_registrant,
    src__app: app$,
    src__presentation__pages__login_page: login_page
  };
}));

//# sourceMappingURL=main.js.map
