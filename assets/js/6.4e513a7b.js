(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{325:function(t,s,a){"use strict";a.r(s);var n=a(33),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("Bit"),t._v(" "),a("p",[a("code",[t._v("Capybara::ActiveAdmin")]),t._v(" created to write tests as fast as "),a("code",[t._v("ActiveAdmin")]),t._v(" resource which they are test.")]),t._v(" "),a("h2",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),a("h3",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Gemfile")]),t._v("\n\ngem "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'capybara_active_admin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n")])])]),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# spec/rails_helper.rb")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# after require 'rspec' or 'rspec/rails'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'capybara/active_admin/rspec'")]),t._v("\n")])])]),a("h3",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("p",[t._v("For example we have such database table")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("create_table "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":users")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("string "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":full_name")]),t._v("\n  t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timestamps\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("p",[t._v("And such "),a("code",[t._v("ActiveRecord")]),t._v(" model")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ActiveRecord")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Base")]),t._v("\n  validates "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":full_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" presence"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("p",[t._v("And there is our "),a("code",[t._v("ActiveAdmin")]),t._v(" resource")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ActiveAdmin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("register "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("User")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n  permit_params "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":full_name")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("p",[t._v("Our test can look like below")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# spec/system/users_spec.rb")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RSpec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("describe "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Users'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n\n  describe "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'index page'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n    subject "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n      visit admin_users_path\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n    it "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'have no table'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n      subject\n\n      expect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to have_text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'There are no Users yet.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      expect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to have_action_item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'New User'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      expect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_not have_action_item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Edit User'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      expect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_not have_table\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n    context "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'with users'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n      let"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":users")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("User")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("full_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'John Doe'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("User")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("full_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Jane Air'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n      it "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'have correct table rows'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n        subject\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# you can check that table is visible on page")]),t._v("\n        expect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to have_table\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# checkout data within table,")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# same as `within(table_selector) do`")]),t._v("\n        within_table_for "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# check how many rows in table (tr)")]),t._v("\n          expect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to have_table_row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or cells (td)")]),t._v("\n          expect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to have_table_cell"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or check cell of specific column contain specific value,")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# accepts same options as `have_selector`, such as :text, :exact_text, :count, etc.")]),t._v("\n          expect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to have_table_cell"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'John Doe'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" column"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Full Name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# we can check data inside specific row by record id,")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or we can find it by index in table `within_table_row(index: 0) do`.")]),t._v("\n          within_table_row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# default columns for users table are id, full_name, created_at, updated_at, actions.")]),t._v("\n            expect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to have_table_cell"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            expect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to have_table_cell"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'John Doe'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or you can write")]),t._v("\n            expect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to have_table_cell"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'John Doe'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" column"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Full Name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# negate matcher")]),t._v("\n            expect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_not have_table_cell"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'John Doe'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" column"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n          within_table_row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("second"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n            expect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to have_table_cell"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("second"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" column"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            expect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to have_table_cell"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Jane Air'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" column"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Full Name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            expect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_not have_table_cell"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'John Doe'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);