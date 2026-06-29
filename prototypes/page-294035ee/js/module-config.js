window.MODULE_SPEC = {
  "moduleName": "费用重计",
  "pageId": "page-294035ee",
  "breadcrumb": "费用重计",
  "pageType": "list-crud",
  "version": "1.0.0",
  "dataFile": "data/page-294035ee-data.json",
  "filters": [
    {
      "id": "filter0",
      "label": "客户代码",
      "type": "select",
      "field": "field1",
      "match": "exact",
      "options": [
        {
          "value": "demo",
          "label": "DEMO"
        }
      ],
      "defaultValue": "全部"
    },
    {
      "id": "filter1",
      "label": "仓库代码",
      "type": "select",
      "field": "field2",
      "match": "exact",
      "options": [
        {
          "value": "demo",
          "label": "DEMO"
        }
      ],
      "defaultValue": ""
    },
    {
      "id": "filter2",
      "label": "渠道",
      "type": "select",
      "field": "field3",
      "match": "exact",
      "options": [
        {
          "value": "",
          "label": "全部"
        }
      ],
      "defaultValue": ""
    },
    {
      "id": "filter3",
      "label": "跟踪号",
      "type": "text",
      "field": "field4",
      "match": "contains",
      "placeholder": "请输入"
    }
  ],
  "columns": [
    {
      "field": "field1",
      "label": "客户代码"
    },
    {
      "field": "field2",
      "label": "仓库代码"
    },
    {
      "field": "field3",
      "label": "渠道"
    },
    {
      "field": "field4",
      "label": "跟踪号"
    },
    {
      "field": "field5",
      "label": "预报尺寸"
    },
    {
      "field": "field6",
      "label": "预报重量"
    },
    {
      "field": "field7",
      "label": "实际尺寸"
    },
    {
      "field": "field8",
      "label": "实际重量"
    },
    {
      "field": "field9",
      "label": "预报金额"
    },
    {
      "field": "field10",
      "label": "实际金额"
    },
    {
      "field": "field11",
      "label": "差价"
    },
    {
      "field": "field12",
      "label": "创建人"
    },
    {
      "field": "createdAt",
      "label": "创建时间",
      "type": "datetime",
      "sortable": true
    },
    {
      "field": "field14",
      "label": "更新人"
    },
    {
      "field": "updatedAt",
      "label": "更新时间",
      "type": "datetime",
      "sortable": true
    }
  ],
  "rowActions": [
    "edit",
    "delete"
  ],
  "toolbarButtons": [
    {
      "id": "toolbarBtn0",
      "label": "导入",
      "icon": "fa-upload",
      "action": "import",
      "variant": "secondary",
      "logic": "打开导入弹窗"
    },
    {
      "id": "toolbarBtn1",
      "label": "批量删除",
      "icon": "fa-layer-group",
      "action": "custom",
      "variant": "danger",
      "logic": "二次确认弹窗"
    }
  ],
  "statusLabels": {
    "active": {
      "label": "启用",
      "class": "badge-success"
    },
    "inactive": {
      "label": "禁用",
      "class": "badge-secondary"
    }
  },
  "mockData": [
    {
      "id": "row_001",
      "field1": "示例客户代码",
      "field2": "示例仓库代码",
      "field3": "示例渠道",
      "field4": "示例跟踪号",
      "field5": "示例预报尺寸",
      "field6": "示例预报重量",
      "field7": "示例实际尺寸",
      "field8": "示例实际重量",
      "field9": "示例预报金额",
      "field10": "示例实际金额",
      "field11": "示例差价",
      "field12": "示例创建人",
      "createdAt": "2026-06-27T10:00:00.000Z",
      "field14": "示例更新人",
      "updatedAt": "2026-06-27T10:00:00.000Z"
    }
  ],
  "logicDocs": {
    "buttons": [
      [
        "导入",
        "工具栏",
        "无",
        "打开导入弹窗"
      ],
      [
        "批量删除",
        "工具栏",
        "无",
        "二次确认弹窗"
      ],
      [
        "编辑",
        "行操作",
        "无",
        "打开编辑弹窗并回填，保存后刷新"
      ],
      [
        "删除",
        "行操作",
        "无",
        "二次确认后从列表移除"
      ]
    ]
  },
  "formFields": [
    {
      "id": "fieldField1",
      "label": "客户代码",
      "field": "field1",
      "required": true,
      "type": "text",
      "placeholder": "请输入客户代码"
    },
    {
      "id": "fieldField2",
      "label": "仓库代码",
      "field": "field2",
      "required": true,
      "type": "text",
      "placeholder": "请输入仓库代码"
    },
    {
      "id": "fieldField3",
      "label": "渠道",
      "field": "field3",
      "required": true,
      "type": "text",
      "placeholder": "请输入渠道"
    },
    {
      "id": "fieldField4",
      "label": "跟踪号",
      "field": "field4",
      "required": true,
      "type": "text",
      "placeholder": "请输入跟踪号"
    },
    {
      "id": "fieldField5",
      "label": "预报尺寸",
      "field": "field5",
      "required": true,
      "type": "text",
      "placeholder": "请输入预报尺寸"
    },
    {
      "id": "fieldField6",
      "label": "预报重量",
      "field": "field6",
      "required": true,
      "type": "text",
      "placeholder": "请输入预报重量"
    },
    {
      "id": "fieldField7",
      "label": "实际尺寸",
      "field": "field7",
      "required": true,
      "type": "text",
      "placeholder": "请输入实际尺寸"
    },
    {
      "id": "fieldField8",
      "label": "实际重量",
      "field": "field8",
      "required": true,
      "type": "text",
      "placeholder": "请输入实际重量"
    },
    {
      "id": "fieldField9",
      "label": "预报金额",
      "field": "field9",
      "required": true,
      "type": "text",
      "placeholder": "请输入预报金额"
    },
    {
      "id": "fieldField10",
      "label": "实际金额",
      "field": "field10",
      "required": true,
      "type": "text",
      "placeholder": "请输入实际金额"
    },
    {
      "id": "fieldField11",
      "label": "差价",
      "field": "field11",
      "required": true,
      "type": "text",
      "placeholder": "请输入差价"
    },
    {
      "id": "fieldField12",
      "label": "创建人",
      "field": "field12",
      "required": true,
      "type": "text",
      "placeholder": "请输入创建人"
    },
    {
      "id": "fieldField14",
      "label": "更新人",
      "field": "field14",
      "required": true,
      "type": "text",
      "placeholder": "请输入更新人"
    }
  ],
  "logicDocsHtml": "<div class=\"mb-4 border border-gray-200 rounded-lg overflow-hidden\">\n  <div class=\"px-4 py-3 bg-gray-50 border-b border-gray-200\">\n    <h4 class=\"font-semibold text-gray-800 flex items-center\">\n      <i class=\"fas fa-play-circle text-primary mr-2\"></i>初始化页面（数据展示逻辑）\n    </h4>\n  </div>\n  <div class=\"p-4\"><div class=\"overflow-x-auto\"><table class=\"min-w-full text-sm border border-gray-200 rounded\"><thead class=\"bg-gray-50\"><tr><th class=\"px-3 py-2 text-left font-medium text-gray-700 border-b\">逻辑项</th><th class=\"px-3 py-2 text-left font-medium text-gray-700 border-b\">说明</th><th class=\"px-3 py-2 text-left font-medium text-gray-700 border-b\">数据来源</th><th class=\"px-3 py-2 text-left font-medium text-gray-700 border-b\">展示规则</th></tr></thead><tbody><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">列表数据</td><td class=\"px-3 py-2 text-gray-600\">根据渠道返回真实尺寸，重新计算快递费并计算差价</td><td class=\"px-3 py-2 text-gray-600\">mock 数据</td><td class=\"px-3 py-2 text-gray-600\">默认排序</td></tr></tbody></table></div></div>\n</div><div class=\"mb-4 border border-gray-200 rounded-lg overflow-hidden\">\n  <div class=\"px-4 py-3 bg-gray-50 border-b border-gray-200\">\n    <h4 class=\"font-semibold text-gray-800 flex items-center\">\n      <i class=\"fas fa-search text-primary mr-2\"></i>检索条件\n    </h4>\n  </div>\n  <div class=\"p-4\"><div class=\"overflow-x-auto\"><table class=\"min-w-full text-sm border border-gray-200 rounded\"><thead class=\"bg-gray-50\"><tr><th class=\"px-3 py-2 text-left font-medium text-gray-700 border-b\">检索项</th><th class=\"px-3 py-2 text-left font-medium text-gray-700 border-b\">输入方式</th><th class=\"px-3 py-2 text-left font-medium text-gray-700 border-b\">逻辑说明</th></tr></thead><tbody><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">客户代码</td><td class=\"px-3 py-2 text-gray-600\">下拉单选</td><td class=\"px-3 py-2 text-gray-600\">DEMO</td></tr><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">仓库代码</td><td class=\"px-3 py-2 text-gray-600\">下拉单选</td><td class=\"px-3 py-2 text-gray-600\">DEMO</td></tr><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">渠道</td><td class=\"px-3 py-2 text-gray-600\">下拉单选</td><td class=\"px-3 py-2 text-gray-600\">按配置匹配</td></tr><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">跟踪号</td><td class=\"px-3 py-2 text-gray-600\">文本输入</td><td class=\"px-3 py-2 text-gray-600\">按配置匹配</td></tr></tbody></table></div></div>\n</div><div class=\"mb-4 border border-gray-200 rounded-lg overflow-hidden\">\n  <div class=\"px-4 py-3 bg-gray-50 border-b border-gray-200\">\n    <h4 class=\"font-semibold text-gray-800 flex items-center\">\n      <i class=\"fas fa-mouse-pointer text-primary mr-2\"></i>模块按钮逻辑\n    </h4>\n  </div>\n  <div class=\"p-4\"><div class=\"overflow-x-auto\"><table class=\"min-w-full text-sm border border-gray-200 rounded\"><thead class=\"bg-gray-50\"><tr><th class=\"px-3 py-2 text-left font-medium text-gray-700 border-b\">按钮</th><th class=\"px-3 py-2 text-left font-medium text-gray-700 border-b\">位置</th><th class=\"px-3 py-2 text-left font-medium text-gray-700 border-b\">前置条件</th><th class=\"px-3 py-2 text-left font-medium text-gray-700 border-b\">后续操作</th></tr></thead><tbody><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">导入</td><td class=\"px-3 py-2 text-gray-600\">工具栏</td><td class=\"px-3 py-2 text-gray-600\">无</td><td class=\"px-3 py-2 text-gray-600\">打开导入弹窗</td></tr><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">批量删除</td><td class=\"px-3 py-2 text-gray-600\">工具栏</td><td class=\"px-3 py-2 text-gray-600\">无</td><td class=\"px-3 py-2 text-gray-600\">二次确认弹窗</td></tr><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">编辑</td><td class=\"px-3 py-2 text-gray-600\">行操作</td><td class=\"px-3 py-2 text-gray-600\">无</td><td class=\"px-3 py-2 text-gray-600\">打开编辑弹窗并回填，保存后刷新</td></tr><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">删除</td><td class=\"px-3 py-2 text-gray-600\">行操作</td><td class=\"px-3 py-2 text-gray-600\">无</td><td class=\"px-3 py-2 text-gray-600\">二次确认后从列表移除</td></tr></tbody></table></div></div>\n</div><div class=\"mb-4 border border-gray-200 rounded-lg overflow-hidden\">\n  <div class=\"px-4 py-3 bg-gray-50 border-b border-gray-200\">\n    <h4 class=\"font-semibold text-gray-800 flex items-center\">\n      <i class=\"fas fa-list-alt text-primary mr-2\"></i>属性取值逻辑\n    </h4>\n  </div>\n  <div class=\"p-4\"><div class=\"overflow-x-auto\"><table class=\"min-w-full text-sm border border-gray-200 rounded\"><thead class=\"bg-gray-50\"><tr><th class=\"px-3 py-2 text-left font-medium text-gray-700 border-b\">字段</th><th class=\"px-3 py-2 text-left font-medium text-gray-700 border-b\">名称</th><th class=\"px-3 py-2 text-left font-medium text-gray-700 border-b\">类型</th><th class=\"px-3 py-2 text-left font-medium text-gray-700 border-b\">必填</th><th class=\"px-3 py-2 text-left font-medium text-gray-700 border-b\">取值说明</th></tr></thead><tbody><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">客户代码</td><td class=\"px-3 py-2 text-gray-600\">文本</td><td class=\"px-3 py-2 text-gray-600\">否</td><td class=\"px-3 py-2 text-gray-600\">—</td></tr><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">仓库代码</td><td class=\"px-3 py-2 text-gray-600\">文本</td><td class=\"px-3 py-2 text-gray-600\">否</td><td class=\"px-3 py-2 text-gray-600\">—</td></tr><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">渠道</td><td class=\"px-3 py-2 text-gray-600\">文本</td><td class=\"px-3 py-2 text-gray-600\">否</td><td class=\"px-3 py-2 text-gray-600\">—</td></tr><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">跟踪号</td><td class=\"px-3 py-2 text-gray-600\">文本</td><td class=\"px-3 py-2 text-gray-600\">否</td><td class=\"px-3 py-2 text-gray-600\">—</td></tr><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">预报尺寸</td><td class=\"px-3 py-2 text-gray-600\">文本</td><td class=\"px-3 py-2 text-gray-600\">否</td><td class=\"px-3 py-2 text-gray-600\">—</td></tr><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">预报重量</td><td class=\"px-3 py-2 text-gray-600\">文本</td><td class=\"px-3 py-2 text-gray-600\">否</td><td class=\"px-3 py-2 text-gray-600\">—</td></tr><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">实际尺寸</td><td class=\"px-3 py-2 text-gray-600\">文本</td><td class=\"px-3 py-2 text-gray-600\">否</td><td class=\"px-3 py-2 text-gray-600\">—</td></tr><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">实际重量</td><td class=\"px-3 py-2 text-gray-600\">文本</td><td class=\"px-3 py-2 text-gray-600\">否</td><td class=\"px-3 py-2 text-gray-600\">—</td></tr><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">预报金额</td><td class=\"px-3 py-2 text-gray-600\">文本</td><td class=\"px-3 py-2 text-gray-600\">否</td><td class=\"px-3 py-2 text-gray-600\">—</td></tr><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">实际金额</td><td class=\"px-3 py-2 text-gray-600\">文本</td><td class=\"px-3 py-2 text-gray-600\">否</td><td class=\"px-3 py-2 text-gray-600\">—</td></tr><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">差价</td><td class=\"px-3 py-2 text-gray-600\">文本</td><td class=\"px-3 py-2 text-gray-600\">否</td><td class=\"px-3 py-2 text-gray-600\">—</td></tr><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">创建人</td><td class=\"px-3 py-2 text-gray-600\">文本</td><td class=\"px-3 py-2 text-gray-600\">否</td><td class=\"px-3 py-2 text-gray-600\">—</td></tr><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">创建时间</td><td class=\"px-3 py-2 text-gray-600\">日期时间</td><td class=\"px-3 py-2 text-gray-600\">是</td><td class=\"px-3 py-2 text-gray-600\">—</td></tr><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">更新人</td><td class=\"px-3 py-2 text-gray-600\">文本</td><td class=\"px-3 py-2 text-gray-600\">否</td><td class=\"px-3 py-2 text-gray-600\">—</td></tr><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">更新时间</td><td class=\"px-3 py-2 text-gray-600\">日期时间</td><td class=\"px-3 py-2 text-gray-600\">是</td><td class=\"px-3 py-2 text-gray-600\">—</td></tr></tbody></table></div></div>\n</div>"
};
