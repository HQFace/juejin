// 导航栏项目
export const navList = [
  {
    title: '推荐',
    category: '',
    key: '/recommended'
  },
  {
    title: '后端',
    category: '5562b419e4b00c57d9b94ae2',
    key: '/backend'
  },
  {
    title: '前端',
    category: '5562b415e4b00c57d9b94ac8',
    key: '/frontend'
  },
  {
    title: 'Android',
    category: '5562b410e4b00c57d9b94a92',
    key: '/android'
  },
  {
    title: 'iOS',
    category: '5562b405e4b00c57d9b94a41',
    key: '/ios'
  },
  {
    title: '人工智能',
    category: '57be7c18128fe1005fa902de',
    key: '/ai'
  },
  {
    title: '开发工具',
    category: '5562b422e4b00c57d9b94b53',
    key: '/freebie'
  },
  {
    title: '代码人生',
    category: '5c9c7cca1b117f3c60fee548',
    key: '/career'
  },
  {
    title: '阅读',
    category: '5562b428e4b00c57d9b94b9d',
    key: '/article'
  }
]

export const feedParagraph = { // feed流骨架屏数据
  type: 'row',
  rows: [
    {
      type: 'rect',
      rowStyle: {
        marginTop: '16px',
        marginLeft: '26px'
      },
      style: {
        width: '50%',
        height: '16px'
      }
    },
    {
      type: 'rect',
      rowStyle: {
        marginTop: '16px',
        marginLeft: '26px'
      },
      style: {
        width: '80%',
        height: '16px'
      }
    },
    {
      type: 'rect',
      rowStyle: {
        marginTop: '16px',
        marginLeft: '26px',
        marginBottom: '16px'
      },
      style: {
        width: '80%',
        height: '16px'
      }
    }
  ]
}

export const dropdownParagraph = { // 导航下拉框的骨架屏样式数据
  type: 'row',
  rows: [
    // 第一行
    {
      type: 'col',
      rowStyle: {
        marginTop: '12px'
      },
      style: {
        width: '60%'
      },
      cols: [
        {
          type: 'rect',
          style: {
            width: '69px',
            height: '26px',
            borderRadius: '3px'
          }
        },
        {
          type: 'rect',
          colStyle: {
            marginLeft: '12px'
          },
          style: {
            width: '80px',
            height: '26px',
            borderRadius: '3px'
          }
        },
        {
          type: 'rect',
          colStyle: {
            marginLeft: '12px'
          },
          style: {
            width: '72px',
            height: '26px',
            borderRadius: '3px'
          }
        }
      ]
    },
    // 第二行
    {
      type: 'col',
      rowStyle: {
        marginTop: '12px'
      },
      style: {
        width: '60%'
      },
      cols: [
        {
          type: 'rect',
          style: {
            width: '52px',
            height: '26px',
            borderRadius: '3px'
          }
        },
        {
          type: 'rect',
          colStyle: {
            marginLeft: '12px'
          },
          style: {
            width: '52px',
            height: '26px',
            borderRadius: '3px'
          }
        },
        {
          type: 'rect',
          colStyle: {
            marginLeft: '12px'
          },
          style: {
            width: '80px',
            height: '26px',
            borderRadius: '3px'
          }
        },
        {
          type: 'rect',
          colStyle: {
            marginLeft: '12px'
          },
          style: {
            width: '44px',
            height: '26px',
            borderRadius: '3px'
          }
        }
      ]
    },
    // 第三行
    {
      type: 'col',
      rowStyle: {
        marginTop: '12px'
      },
      style: {
        width: '60%'
      },
      cols: [
        {
          type: 'rect',
          style: {
            width: '45px',
            height: '26px',
            borderRadius: '3px'
          }
        },
        {
          type: 'rect',
          colStyle: {
            marginLeft: '12px'
          },
          style: {
            width: '62px',
            height: '26px',
            borderRadius: '3px'
          }
        },
        {
          type: 'rect',
          colStyle: {
            marginLeft: '12px'
          },
          style: {
            width: '76px',
            height: '26px',
            borderRadius: '3px'
          }
        }
      ]
    },
    // 第四行
    {
      type: 'col',
      rowStyle: {
        marginTop: '12px'
      },
      style: {
        width: '60%'
      },
      cols: [
        {
          type: 'rect',
          style: {
            width: '52px',
            height: '26px',
            borderRadius: '3px'
          }
        },
        {
          type: 'rect',
          colStyle: {
            marginLeft: '12px'
          },
          style: {
            width: '80px',
            height: '26px',
            borderRadius: '3px'
          }
        },
        {
          type: 'rect',
          colStyle: {
            marginLeft: '12px'
          },
          style: {
            width: '52px',
            height: '26px',
            borderRadius: '3px'
          }
        }
      ]
    },
    // 第五行
    {
      type: 'col',
      rowStyle: {
        marginTop: '12px'
      },
      style: {
        width: '60%'
      },
      cols: [
        {
          type: 'rect',
          style: {
            width: '55px',
            height: '26px',
            borderRadius: '3px'
          }
        },
        {
          type: 'rect',
          colStyle: {
            marginLeft: '12px'
          },
          style: {
            width: '62px',
            height: '26px',
            borderRadius: '3px'
          }
        }
      ]
    }
  ]
}
